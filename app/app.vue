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

        <!-- Desktop Nav -->
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

        <!-- Mobile: Language switcher + Hamburger -->
        <div class="md:hidden flex items-center gap-4">
          <div class="flex items-center gap-2 font-mono text-sm text-slate-400">
            <button @click="setLocale('en')" :class="['transition-colors', locale === 'en' ? 'text-emerald-400 font-bold' : 'hover:text-emerald-400']">EN</button>
            <span class="text-slate-700">|</span>
            <button @click="setLocale('vi')" :class="['transition-colors', locale === 'vi' ? 'text-emerald-400 font-bold' : 'hover:text-emerald-400']">VI</button>
          </div>
          <button
            id="mobile-menu-btn"
            @click="mobileOpen = !mobileOpen"
            class="text-slate-400 hover:text-emerald-400 transition-colors p-1"
            :aria-label="mobileOpen ? 'Close menu' : 'Open menu'"
          >
            <svg v-if="!mobileOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Drawer -->
      <Transition name="mobile-nav">
        <nav
          v-if="mobileOpen"
          class="md:hidden bg-slate-950 border-t border-slate-800 px-6 py-6 flex flex-col gap-6 font-mono text-slate-300"
        >
          <a href="#career" @click="mobileOpen = false" class="text-lg uppercase tracking-widest hover:text-emerald-400 transition-colors flex items-center gap-3">
            <span class="text-emerald-500 text-sm">01</span> {{ $t('nav.career') }}
          </a>
          <a href="#projects" @click="mobileOpen = false" class="text-lg uppercase tracking-widest hover:text-emerald-400 transition-colors flex items-center gap-3">
            <span class="text-emerald-500 text-sm">02</span> {{ $t('nav.projects') }}
          </a>
          <a href="#stack" @click="mobileOpen = false" class="text-lg uppercase tracking-widest hover:text-emerald-400 transition-colors flex items-center gap-3">
            <span class="text-emerald-500 text-sm">03</span> {{ $t('nav.stack') }}
          </a>
          <a href="#contact" @click="mobileOpen = false" class="text-lg uppercase tracking-widest hover:text-emerald-400 transition-colors flex items-center gap-3">
            <span class="text-emerald-500 text-sm">04</span> {{ $t('nav.contact') }}
          </a>
        </nav>
      </Transition>
    </header>

    <main class="w-full flex-col flex items-center pt-24 px-6 md:px-12 lg:px-24">
      <NuxtPage />
    </main>
  </div>
</template>

<script setup lang="ts">
const { locale, setLocale } = useI18n()
const mobileOpen = ref(false)

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

/* Mobile nav slide-down transition */
.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.mobile-nav-enter-from,
.mobile-nav-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
