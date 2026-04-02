<template>
  <section class="w-full">
    <!-- Section Header -->
    <div class="mb-16">
      <p class="font-mono text-emerald-500 text-sm mb-2">// meta_data</p>
      <h2 class="text-4xl sm:text-5xl font-bold tracking-tighter text-slate-100 uppercase">
        NGÔN_NGỮ &amp; <span class="text-emerald-500">SỞ_THÍCH</span>
      </h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
      <!-- Languages -->
      <div>
        <h3 class="font-mono text-xs text-slate-500 uppercase tracking-widest mb-8 border-b border-slate-800 pb-4">
          {{ t('languages.title') }}
        </h3>
        <ul class="space-y-6">
          <li
            v-for="lang in languages"
            :key="lang.code"
            class="flex items-start justify-between border-b border-slate-800/50 pb-5 group"
          >
            <span class="font-bold text-slate-200 text-xl group-hover:text-emerald-400 transition-colors">
              {{ lang.name }}
            </span>
            <span class="font-mono text-sm text-emerald-500 text-right max-w-[55%] leading-relaxed">
              {{ lang.level }}
            </span>
          </li>
        </ul>
      </div>

      <!-- Interests -->
      <div>
        <h3 class="font-mono text-xs text-slate-500 uppercase tracking-widest mb-8 border-b border-slate-800 pb-4">
          {{ t('interests.title') }}
        </h3>
        <ul class="space-y-6">
          <li
            v-for="item in interests"
            :key="item.name"
            class="flex items-center gap-5 border-b border-slate-800/50 pb-5 group"
          >
            <span class="text-2xl">{{ item.icon }}</span>
            <span class="font-bold text-slate-200 text-xl group-hover:text-emerald-400 transition-colors">
              {{ item.name }}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t, tm, rt } = useI18n()

const languages = computed(() =>
  (tm('languages.list') as any[]).map(item => ({
    name: rt(item.name),
    level: rt(item.level),
    code: rt(item.code),
  }))
)

const interests = computed(() =>
  (tm('interests.list') as any[]).map(item => ({
    name: rt(item.name),
    icon: rt(item.icon),
  }))
)
</script>
