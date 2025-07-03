<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { Star, GitFork, Loader2, RotateCcw } from 'lucide-vue-next'
import Searchbar from './Searchbar.vue';
import { fetchPinnedRepos, type Repository } from '../utils/github';
import { onMounted, ref, computed } from 'vue';

// Locale
const { t } = useI18n();

// Repo data
const repos = ref<Repository[]>([]);
const filteredRepos = computed(function() {
    if (!searchQuery.value) return repos.value;

    const query = searchQuery.value.toLowerCase();
    return repos.value.filter(function(repo) {
        const searchableText = [
            repo.name,
            repo.description || '',
            ...(repo.languages || []),
            ...(repo.topics || [])
        ].join(' ').toLowerCase()

        return searchableText.includes(query)
    })
})
const isLoading = ref(true);
const error = ref<string | null>(null);
const searchQuery = ref('');

// Events
onMounted(function(){
    featchRepos(); 
});

// Functions
async function featchRepos() {
    const gitrepo = await fetchPinnedRepos();
    isLoading.value = false;
    if (gitrepo.length === 0) return;
    repos.value = gitrepo;
}

function getHostname(url: string):string {
    return new URL(url).hostname
}
</script>

<template>
    <section id="projects" class="projects-section">
        <div class="project">
            <h2>{{ t("proj.my_proj") }}</h2>
            <Searchbar v-if="!isLoading && !error" v-model="searchQuery" :placeholder="t('proj.placeholder')" />

            <div v-if="isLoading" class="project-loading">
                <div>
                    <Loader2 class="project-loading-icon" />
                    <span>{{ t('proj.loading') }}</span>
                </div>
            </div>

            <div v-else-if="repos.length === 0" class="project-fetch-fail">
                <span role="img" aria-label="Tistresa">😔</span>
                <p>{{ searchQuery ? t('proj.nores') : t('proj.noproj') }}</p>
                <button v-if="searchQuery" @click="searchQuery = ''">
                    <RotateCcw class="project-fetch-fail-icon" />
                    <span>{{ t('proj.clearsearch') }}</span>
                </button>
            </div>

            <div v-else class="projects-card">
                <article v-for="(repo, index) in filteredRepos" :key="repo.url"
                    :style="{ animationDelay: `${index * 100}ms` }">
                    <div>
                        <div class="flex items-start justify-between mb-4">
                            <div>
                                <h3 class="text-2xl font-bold">
                                    <a :href="repo.url" target="_blank" rel="noopener noreferrer"
                                        class="text-neutral-900 dark:text-white hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors hover-underline">
                                        {{ repo.name }}
                                    </a>
                                </h3>
                                <p class="mt-2 text-neutral-700 dark:text-neutral-300">
                                    {{ repo.description }}
                                </p>
                                <div v-if="repo.homepage" class="mt-2">
                                    <a :href="repo.homepage" target="_blank" rel="noopener noreferrer"
                                        class="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
                                        {{ getHostname(repo.homepage) }}
                                    </a>
                                </div>
                            </div>
                            <div class="flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
                                <span class="flex items-center gap-1" :title="t('projects.stars')">
                                    <Star class="w-4 h-4" />
                                    {{ repo.stars }}
                                </span>
                                <span class="flex items-center gap-1" :title="t('projects.forks')">
                                    <GitFork class="w-4 h-4" />
                                    {{ repo.forks }}
                                </span>
                            </div>
                        </div>
                        <div class="flex flex-wrap gap-2 mt-4">
                            <span v-for="tag in repo.tags" :key="tag"
                                class="px-3 py-1 text-sm bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-full">
                                {{ tag }}
                            </span>
                        </div>
                        <div class="flex flex-wrap gap-2 mt-4">
                            <span v-for="lang in repo.languages" :key="lang"
                                class="px-3 py-1 text-sm bg-neutral-50 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 rounded-full border border-neutral-200 dark:border-neutral-700 font-medium">
                                {{ lang }}
                            </span>
                        </div>
                        <div class="mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-700">
                            <a :href="repo.url" target="_blank" rel="noopener noreferrer"
                                class="text-sm text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors hover-underline">
                                {{ t('projects.viewOnGithub') }}
                            </a>
                        </div>
                    </div>
                </article>
            </div>

        </div> 
    </section>
</template>

<style scoped></style>
