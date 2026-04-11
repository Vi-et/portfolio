<template>
  <section class="w-full">
    <div class="mb-12 flex items-end justify-between">
      <h2 class="text-4xl md:text-5xl font-bold tracking-tighter text-slate-100 uppercase">
        <span class="text-emerald-500 font-mono text-xl block mb-2 opacity-70">/* 02 */</span>
        {{ $t('projects.title') }}
      </h2>
      <div class="hidden md:block font-mono text-sm text-slate-500 uppercase tracking-widest">
        {{ $t('projects.subtitle') }}
      </div>
    </div>

    <!-- Tab Switch -->
    <div class="flex border-b-2 border-slate-800 mb-0">
      <button
        :class="[
          'font-mono text-sm uppercase tracking-widest px-6 py-4 transition-all duration-300 relative',
          activeTab === 'professional' 
            ? 'text-emerald-400 bg-emerald-500/10' 
            : 'text-slate-500 hover:text-slate-300 hover:bg-slate-900/50'
        ]"
        @click="switchTab('professional')"
      >
        {{ $t('projects.tabs.professional') }}
        <span 
          v-if="activeTab === 'professional'"
          class="absolute bottom-0 left-0 right-0 h-[2px] bg-emerald-500"
        ></span>
      </button>
      <button
        :class="[
          'font-mono text-sm uppercase tracking-widest px-6 py-4 transition-all duration-300 relative',
          activeTab === 'side' 
            ? 'text-emerald-400 bg-emerald-500/10' 
            : 'text-slate-500 hover:text-slate-300 hover:bg-slate-900/50'
        ]"
        @click="switchTab('side')"
      >
        {{ $t('projects.tabs.side') }}
        <span 
          v-if="activeTab === 'side'"
          class="absolute bottom-0 left-0 right-0 h-[2px] bg-emerald-500"
        ></span>
      </button>
    </div>

    <!-- Projects List -->
    <Transition name="tab-fade" mode="out-in">
      <div 
        v-if="activeTab === 'professional'" 
        key="professional" 
        ref="professionalList" 
        class="flex flex-col border-t-0 min-h-0"
      >
        <a 
          v-for="(project, index) in professionalProjects" 
          :key="index"
          :href="project.link"
          target="_blank"
          class="project-row group border-b border-slate-800 py-8 px-2 flex flex-col lg:flex-row lg:items-start justify-between gap-6 hover:bg-slate-900/50 transition-colors duration-300 relative overflow-hidden"
        >
          <!-- Hover indicator line -->
          <span class="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500 transform scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300"></span>

          <!-- Project Info -->
          <div class="flex-1 z-10">
            <div class="flex items-center gap-4 mb-2">
              <h3 class="text-2xl md:text-3xl font-bold text-slate-200 group-hover:text-white group-hover:translate-x-2 transition-all duration-300">
                {{ project.title }}
              </h3>
            </div>
            <p class="mt-3 text-slate-400 font-mono text-sm max-w-2xl leading-relaxed">
              <span v-html="parseHighlight(project.description)"></span>
            </p>
            <ul class="mt-4 space-y-1 text-slate-500 font-mono text-xs opacity-80 pl-4 border-l-2 border-slate-800 group-hover:border-emerald-500/50 transition-colors">
              <li v-for="(detail, i) in project.achievements" :key="i">
                <span class="text-slate-600 mr-2">&gt;</span> <span v-html="parseHighlight(detail)"></span>
              </li>
            </ul>
          </div>

          <!-- Tech Stack Tags -->
          <div class="flex flex-wrap lg:justify-end gap-x-4 gap-y-2 lg:w-1/3 z-10">
            <span 
              v-for="tech in project.tech" 
              :key="tech"
              class="font-mono text-xs uppercase tracking-widest text-slate-500 group-hover:text-emerald-400 transition-colors duration-300"
            >
              [{{ tech }}]
            </span>
          </div>
        </a>
      </div>

      <div 
        v-else 
        key="side" 
        ref="sideList" 
        class="flex flex-col border-t-0 min-h-0"
      >
        <a 
          v-for="(project, index) in sideProjects" 
          :key="index"
          :href="project.link"
          target="_blank"
          class="project-row group border-b border-slate-800 py-8 px-2 flex flex-col lg:flex-row lg:items-start justify-between gap-6 hover:bg-slate-900/50 transition-colors duration-300 relative overflow-hidden"
        >
          <!-- Hover indicator line -->
          <span class="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500 transform scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300"></span>

          <!-- Project Info -->
          <div class="flex-1 z-10">
            <div class="flex items-center gap-4 mb-2">
              <h3 class="text-2xl md:text-3xl font-bold text-slate-200 group-hover:text-white group-hover:translate-x-2 transition-all duration-300">
                {{ project.title }}
              </h3>
            </div>
            <p class="mt-3 text-slate-400 font-mono text-sm max-w-2xl leading-relaxed">
              <span v-html="parseHighlight(project.description)"></span>
            </p>
            <ul class="mt-4 space-y-1 text-slate-500 font-mono text-xs opacity-80 pl-4 border-l-2 border-slate-800 group-hover:border-emerald-500/50 transition-colors">
              <li v-for="(detail, i) in project.achievements" :key="i">
                <span class="text-slate-600 mr-2">&gt;</span> <span v-html="parseHighlight(detail)"></span>
              </li>
            </ul>
          </div>

          <!-- Tech Stack Tags -->
          <div class="flex flex-wrap lg:justify-end gap-x-4 gap-y-2 lg:w-1/3 z-10">
            <span 
              v-for="tech in project.tech" 
              :key="tech"
              class="font-mono text-xs uppercase tracking-widest text-slate-500 group-hover:text-emerald-400 transition-colors duration-300"
            >
              [{{ tech }}]
            </span>
          </div>
        </a>
      </div>
    </Transition>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref, nextTick, computed } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const { tm, rt } = useI18n()

const professionalList = ref<HTMLElement | null>(null)
const sideList = ref<HTMLElement | null>(null)
const activeTab = ref<'professional' | 'side'>('professional')

function switchTab(tab: 'professional' | 'side') {
  activeTab.value = tab
  nextTick(() => {
    animateProjects(tab === 'professional' ? professionalList.value : sideList.value)
  })
}

const professionalProjects = computed(() => {
  const projMap = tm('projects.list') as Record<string, any>;
  return ['ecommerce', 'crm', 'maido'].map(key => {
    const data = projMap[key] || {}
    return {
      title: data.title ? rt(data.title) : '',
      description: data.description ? rt(data.description) : '',
      achievements: (data.achievements || []).map((a: any) => rt(a)),
      tech: (data.tech || []).map((t: any) => rt(t)),
      link: data.link ? rt(data.link) : '#'
    }
  })
})

const sideProjects = computed(() => {
  const projMap = tm('projects.list') as Record<string, any>;
  return ['infra', 'nodejs_ecommerce', 'nestjs_ecommerce', 'portfolio', 'go_api'].map(key => {
    const data = projMap[key] || {}
    return {
      title: data.title ? rt(data.title) : '',
      description: data.description ? rt(data.description) : '',
      achievements: (data.achievements || []).map((a: any) => rt(a)),
      tech: (data.tech || []).map((t: any) => rt(t)),
      link: data.link ? rt(data.link) : '#'
    }
  })
})

function animateProjects(target: HTMLElement | null) {
  if (target) {
    const rows = target.querySelectorAll('.project-row')
    gsap.fromTo(rows,
      { opacity: 0, y: 30 },
      {
        opacity: 1, 
        y: 0, 
        duration: 0.6, 
        stagger: 0.1,
        ease: 'power2.out',
      }
    )
  }
}

onMounted(() => {
  if (professionalList.value) {
    const rows = professionalList.value.querySelectorAll('.project-row')
    
    gsap.fromTo(rows,
      { opacity: 0, y: 30 },
      {
        opacity: 1, 
        y: 0, 
        duration: 0.6, 
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: professionalList.value,
          start: 'top 80%',
        }
      }
    )
  }
})

const parseHighlight = (text: string) => {
  return text.replace(/\*\*(.*?)\*\*/g, '<span class="text-emerald-400 font-bold">$1</span>')
}
</script>

<style scoped>
.tab-fade-enter-active,
.tab-fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.tab-fade-enter-from {
  opacity: 0;
  transform: translateY(12px);
}
.tab-fade-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}
</style>
