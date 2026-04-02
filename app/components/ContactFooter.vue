<template>
  <footer class="w-full pb-32">
    <div class="flex flex-col lg:flex-row gap-16 lg:gap-32 justify-between">
      
      <!-- Big Call to Action -->
      <div class="flex-1">
        <h2 class="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tighter text-slate-100 uppercase leading-none">
          {{ $t('contact.title1') }}<br />
          <span class="text-emerald-500">{{ $t('contact.title2') }}</span>
        </h2>
        <p class="mt-8 text-xl text-slate-400 font-mono max-w-xl line-clamp-3">
          {{ $t('contact.description') }}
        </p>
        
        <div class="mt-12">
          <a 
            :href="`mailto:${$t('contact.mail_address')}`" 
            class="inline-block group"
          >
            <div class="flex items-center gap-4 bg-slate-900 px-8 py-6 border-sharp border border-emerald-500 hover:bg-emerald-500 hover:text-slate-950 text-emerald-500 font-mono text-xl transition-all duration-300">
              <span class="font-bold">{{ $t('contact.button') }}</span>
              <span class="opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-300">→</span>
            </div>
          </a>
        </div>
      </div>

      <!-- Links Grid -->
      <div class="lg:w-1/3 flex flex-col justify-end">
        <h3 class="font-mono text-slate-500 mb-6 text-sm uppercase tracking-widest">{{ $t('contact.endpoints') }}</h3>
        <ul class="space-y-6 form-mono text-2xl font-bold text-slate-300">
          <li>
            <a href="https://github.com/Vi-et" target="_blank" class="flex items-center justify-between group hover:text-emerald-400 transition-colors border-b border-slate-800 pb-4">
              <span>GitHub</span>
              <span class="text-sm font-mono opacity-0 group-hover:opacity-100 text-emerald-500 transition-opacity">github.com/Vi-et</span>
            </a>
          </li>
          <li>
            <a :href="$t('contact.linkedin_url')" target="_blank" class="flex items-center justify-between group hover:text-emerald-400 transition-colors border-b border-slate-800 pb-4">
              <span>LinkedIn</span>
              <span class="text-sm font-mono opacity-0 group-hover:opacity-100 text-emerald-500 transition-opacity">Đặng Nhật Việt</span>
            </a>
          </li>
          <li>
            <a :href="$t('contact.facebook_url')" target="_blank" class="flex items-center justify-between group hover:text-emerald-400 transition-colors border-b border-slate-800 pb-4">
              <span>Facebook</span>
              <span class="text-sm font-mono opacity-0 group-hover:opacity-100 text-emerald-500 transition-opacity">fb.com/vqahihihihi</span>
            </a>
          </li>
          <li>
            <a :href="`tel:${$t('contact.phone')}`" class="flex items-center justify-between group hover:text-emerald-400 transition-colors border-b border-slate-800 pb-4">
              <span>Phone</span>
              <span class="text-sm font-mono opacity-0 group-hover:opacity-100 text-emerald-500 transition-opacity">{{ $t('contact.phone') }}</span>
            </a>
          </li>
        </ul>
      </div>

    </div>

    <!-- Final signature -->
    <div class="mt-32 pt-8 flex flex-col md:flex-row items-center justify-between border-t border-slate-800 font-mono text-sm text-slate-600">
      <div>© {{ new Date().getFullYear() }} ĐẶNG NHẬT VIỆT // {{ $t('contact.copyright') }}</div>
      <div class="flex items-center gap-2 mt-4 md:mt-0">
        <span class="relative flex h-2 w-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        {{ $t('contact.status') }}
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  // Add some simple fade in if needed, but simple CSS handles most here.
})
</script>
