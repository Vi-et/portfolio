<template>
  <section class="w-full">
    <div class="mb-16">
      <h2 class="text-4xl md:text-5xl font-bold tracking-tighter text-slate-100 uppercase">
        <span class="text-emerald-500 font-mono text-xl block mb-2 opacity-70">/* 03 */</span>
        {{ $t('stack.title') }}
      </h2>
    </div>

    <!-- Brutalist Grid - 5 categories -->
    <div ref="stackGrid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 border-t-2 border-l-2 border-slate-800">
      
      <!-- Backend Frameworks -->
      <div class="stack-box border-r-2 border-b-2 border-slate-800 p-8 hover:bg-emerald-500/5 transition-colors duration-300">
        <h3 class="font-mono text-emerald-500 mb-6 text-lg uppercase tracking-widest border-b border-slate-700 pb-2">{{ $t('stack.categories.backend') }}</h3>
        <ul class="space-y-4 font-bold text-xl sm:text-2xl text-slate-300">
          <li class="group flex items-center gap-3 hover:text-emerald-400 cursor-default transition-colors">
            <Icon name="simple-icons:nestjs" class="text-slate-500 group-hover:text-emerald-400 transition-colors" /> NestJS
          </li>
          <li class="group flex items-center gap-3 hover:text-emerald-400 cursor-default transition-colors">
            <Icon name="simple-icons:express" class="text-slate-500 group-hover:text-emerald-400 transition-colors" /> Express.js
          </li>
          <li class="group flex items-center gap-3 hover:text-emerald-400 cursor-default transition-colors">
            <Icon name="simple-icons:django" class="text-slate-500 group-hover:text-emerald-400 transition-colors" /> Django
          </li>
          <li class="group flex items-center gap-3 hover:text-emerald-400 cursor-default transition-colors">
            <Icon name="simple-icons:fastapi" class="text-slate-500 group-hover:text-emerald-400 transition-colors" /> FastAPI
          </li>
          <li class="group flex items-center gap-3 hover:text-emerald-400 cursor-default transition-colors">
            <Icon name="simple-icons:flask" class="text-slate-500 group-hover:text-emerald-400 transition-colors" /> Flask
          </li>
        </ul>
      </div>

      <!-- Databases -->
      <div class="stack-box border-r-2 border-b-2 border-slate-800 p-8 hover:bg-emerald-500/5 transition-colors duration-300">
        <h3 class="font-mono text-emerald-500 mb-6 text-lg uppercase tracking-widest border-b border-slate-700 pb-2">{{ $t('stack.categories.database') }}</h3>
        <ul class="space-y-4 font-bold text-xl sm:text-2xl text-slate-300">
          <li class="group flex items-center gap-3 hover:text-emerald-400 cursor-default transition-colors">
            <Icon name="simple-icons:postgresql" class="text-slate-500 group-hover:text-emerald-400 transition-colors" /> PostgreSQL
          </li>
          <li class="group flex items-center gap-3 hover:text-emerald-400 cursor-default transition-colors">
            <Icon name="simple-icons:mysql" class="text-slate-500 group-hover:text-emerald-400 transition-colors" /> MySQL
          </li>
          <li class="group flex items-center gap-3 hover:text-emerald-400 cursor-default transition-colors">
            <Icon name="simple-icons:mongodb" class="text-slate-500 group-hover:text-emerald-400 transition-colors" /> MongoDB
          </li>
          <li class="group flex items-center gap-3 hover:text-emerald-400 cursor-default transition-colors">
            <Icon name="simple-icons:redis" class="text-slate-500 group-hover:text-emerald-400 transition-colors" /> Redis
          </li>
        </ul>
      </div>

      <!-- Infrastructure -->
      <div class="stack-box border-r-2 border-b-2 border-slate-800 p-8 hover:bg-emerald-500/5 transition-colors duration-300">
        <h3 class="font-mono text-emerald-500 mb-6 text-lg uppercase tracking-widest border-b border-slate-700 pb-2">{{ $t('stack.categories.infra') }}</h3>
        <ul class="space-y-4 font-bold text-xl sm:text-2xl text-slate-300">
          <li class="group flex items-center gap-3 hover:text-emerald-400 cursor-default transition-colors">
            <Icon name="simple-icons:docker" class="text-slate-500 group-hover:text-emerald-400 transition-colors" /> Docker
          </li>
          <li class="group flex items-center gap-3 hover:text-emerald-400 cursor-default transition-colors">
            <Icon name="simple-icons:amazonaws" class="text-slate-500 group-hover:text-emerald-400 transition-colors" /> AWS
          </li>
          <li class="group flex items-center gap-3 hover:text-emerald-400 cursor-default transition-colors">
            <Icon name="simple-icons:terraform" class="text-slate-500 group-hover:text-emerald-400 transition-colors" /> Terraform
          </li>
        </ul>
      </div>

      <!-- Frontend -->
      <div class="stack-box border-r-2 border-b-2 border-slate-800 p-8 hover:bg-emerald-500/5 transition-colors duration-300">
        <h3 class="font-mono text-emerald-500 mb-6 text-lg uppercase tracking-widest border-b border-slate-700 pb-2">{{ $t('stack.categories.frontend') }}</h3>
        <ul class="space-y-4 font-bold text-xl sm:text-2xl text-slate-300">
          <li class="group flex items-center gap-3 hover:text-emerald-400 cursor-default transition-colors">
            <Icon name="simple-icons:vuedotjs" class="text-slate-500 group-hover:text-emerald-400 transition-colors" /> Vue.js
          </li>
          <li class="group flex items-center gap-3 hover:text-emerald-400 cursor-default transition-colors">
            <Icon name="simple-icons:nuxtdotjs" class="text-slate-500 group-hover:text-emerald-400 transition-colors" /> Nuxt.js
          </li>
        </ul>
      </div>

      <div class="stack-box border-r-2 border-b-2 border-slate-800 p-8 hover:bg-emerald-500/5 transition-colors duration-300">
        <h3 class="font-mono text-emerald-500 mb-6 text-lg uppercase tracking-widest border-b border-slate-700 pb-2">{{ $t('stack.categories.other') }}</h3>
        <ul class="space-y-4 font-bold text-xl sm:text-2xl text-slate-300">
          <li class="group flex items-center gap-3 hover:text-emerald-400 cursor-default transition-colors">
            <Icon name="simple-icons:google" class="text-slate-500 group-hover:text-emerald-400 transition-colors" /> App Script
          </li>
          <li class="group flex items-center gap-3 hover:text-emerald-400 cursor-default transition-colors">
            <Icon name="simple-icons:google" class="text-slate-500 group-hover:text-emerald-400 transition-colors" /> AppSheet
          </li>
          <li class="group flex items-center gap-3 hover:text-emerald-400 cursor-default transition-colors">
            <Icon name="simple-icons:google" class="text-slate-500 group-hover:text-emerald-400 transition-colors" /> Looker Studio
          </li>
        </ul>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const stackGrid = ref<HTMLElement | null>(null)

onMounted(() => {
  if (stackGrid.value) {
    const boxes = stackGrid.value.querySelectorAll('.stack-box')
    
    gsap.fromTo(boxes,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1, 
        scale: 1, 
        duration: 0.5, 
        stagger: 0.1,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: stackGrid.value,
          start: 'top 75%',
        }
      }
    )
  }
})
</script>
