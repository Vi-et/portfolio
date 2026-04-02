<template>
  <section class="relative w-full min-h-[70vh] flex flex-col justify-center">
    <!-- Extremely large text, typographic brutalism -->
    <div class="relative z-10 w-full" ref="heroContent">
      <h1 class="text-6xl sm:text-7xl md:text-[8rem] lg:text-[10rem] font-bold leading-[0.85] tracking-tighter text-slate-100 uppercase">
        <span class="block text-emerald-500 opacity-60 font-mono text-sm md:text-xl tracking-widest mb-4">{{ $t('hero.system_ready') }}</span>
        <span class="block overflow-hidden relative group">
          <span class="relative z-10">{{ $t('hero.title1') }}</span>
          <!-- A brutalist glitch/shadow effect achieved through text duplication -->
          <span class="absolute top-0 left-0 -ml-1 mt-1 text-emerald-500 opacity-0 group-hover:opacity-100 mix-blend-screen transition-opacity duration-300 pointer-events-none aria-hidden">{{ $t('hero.title1') }}</span>
        </span>
        <span class="block text-slate-400">{{ $t('hero.title2') }}</span>
      </h1>
      
      <div class="mt-16 w-full max-w-2xl border-l-[4px] border-emerald-500 pl-6 py-2">
        <p class="text-xl md:text-2xl text-slate-300 font-mono leading-relaxed" v-html="parseHighlight($t('hero.description'))">
        </p>
      </div>

      <div class="mt-12 flex gap-6 font-mono text-sm uppercase tracking-widest">
        <a href="#projects" class="px-6 py-4 bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-colors duration-200 border-sharp border border-emerald-500 flex items-center gap-2">
          {{ $t('hero.view_systems') }} <span class="text-lg">→</span>
        </a>
        <a href="#contact" class="px-6 py-4 text-emerald-500 border-sharp border border-emerald-500 hover:bg-emerald-500/10 transition-colors duration-200">
          {{ $t('hero.init_contact') }}
        </a>
      </div>
    </div>
    
    <!-- Brutalist decorative elements -->
    <div class="absolute right-0 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none hidden lg:block">
      <div class="font-mono text-xs leading-[1.2] whitespace-pre text-emerald-500 select-none">
        01000010 01000001
        01000011 01001011
        01000101 01001110
        01000100 00100000
        01000100 01000101
        01010110 01000101
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

const heroContent = ref(null)

const parseHighlight = (text: string) => {
  return text.replace(/\*\*(.*?)\*\*/g, '<span class="text-emerald-400">$1</span>')
}

onMounted(() => {
  const tl = gsap.timeline()
  
  // Staggered reveal for children
  if (heroContent.value) {
    const elements = (heroContent.value as HTMLElement).children

    gsap.fromTo(elements, 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
    )
  }
})
</script>
