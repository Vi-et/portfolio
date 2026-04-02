<template>
  <div class="min-h-screen font-sans selection:bg-emerald-500 selection:text-slate-900">
    <div class="fixed inset-0 pointer-events-none z-[-1] bg-slate-950">
      <!-- Grid pattern background for brutalist tech feel -->
      <div class="absolute inset-0 opacity-[0.03]" style="background-image: radial-gradient(#10b981 1px, transparent 1px); background-size: 24px 24px;"></div>
    </div>
    
    <header class="fixed top-0 w-full z-50 border-b border-slate-800 border-opacity-50 bg-slate-950/80 backdrop-blur-sm">
      <div class="flex items-center justify-between px-6 py-4">
        <div class="font-mono text-emerald-500 font-bold tracking-tighter text-xl border-l-[3px] pl-2 border-emerald-500 border-sharp">
          DEV://VIET
        </div>
        <nav class="hidden md:flex gap-8 text-sm font-mono text-slate-400 items-center">
          <a href="#career" class="hover:text-emerald-400 transition-colors">{{ $t('nav.career') }}</a>
          <a href="#projects" class="hover:text-emerald-400 transition-colors">{{ $t('nav.projects') }}</a>
          <a href="#stack" class="hover:text-emerald-400 transition-colors">{{ $t('nav.stack') }}</a>
          <a href="#contact" class="hover:text-emerald-400 transition-colors">{{ $t('nav.contact') }}</a>
          
          <div class="ml-2 flex items-center gap-2 border-l border-slate-700 pl-6">
            <button @click="setLocale('en')" :class="['transition-colors', locale === 'en' ? 'text-emerald-400 font-bold' : 'hover:text-emerald-400']">EN</button>
            <span class="text-slate-700">|</span>
            <button @click="setLocale('vi')" :class="['transition-colors', locale === 'vi' ? 'text-emerald-400 font-bold' : 'hover:text-emerald-400']">VI</button>
          </div>
        </nav>
      </div>
    </header>

    <main class="w-full flex-col flex items-center pt-24 px-6 md:px-12 lg:px-24">
      <NuxtPage />
    </main>
  </div>
</template>

<script setup lang="ts">
const { locale, setLocale } = useI18n()

useHead({
  title: 'Đặng Nhật Việt | Backend Engineer',
  bodyAttrs: {
    class: 'bg-slate-950 text-slate-200'
  }
})
</script>

<style>
/* Nuxt page transitions */
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
