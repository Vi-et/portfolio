<template>
  <section class="w-full">
    <div class="mb-12 flex items-end justify-between">
      <h2 class="text-4xl md:text-5xl font-bold tracking-tighter text-slate-100 uppercase">
        <span class="text-emerald-500 font-mono text-xl block mb-2 opacity-70">/* 01 */</span>
        {{ $t('career.title') }}
      </h2>
      <div class="hidden md:block font-mono text-sm text-slate-500 uppercase tracking-widest">
        {{ $t('career.subtitle') }}
      </div>
    </div>

    <!-- Terminal-style career log -->
    <div ref="timelineList" class="flex flex-col border-t-2 border-slate-800">
      <div 
        v-for="(entry, index) in careerWithDuration" 
        :key="index"
        class="timeline-entry group border-b border-slate-800 py-8 px-2 relative overflow-hidden hover:bg-slate-900/50 transition-colors duration-300"
      >
        <!-- Hover indicator line -->
        <span class="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500 transform scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300"></span>

        <!-- Header row: period + role -->
        <div class="flex flex-col lg:flex-row lg:items-center gap-4 mb-4 pl-4">
          <!-- Period badge -->
          <div class="flex items-center gap-3 flex-shrink-0">
            <span class="font-mono text-emerald-500 text-sm tracking-wider">
              [{{ entry.period }}]
            </span>
            <span 
              v-if="entry.endLabel" 
              class="font-mono text-xs px-3 py-1 bg-emerald-500 text-slate-950 font-bold tracking-widest animate-pulse"
            >
              {{ entry.endLabel }}
            </span>
          </div>

          <!-- Role + Company -->
          <div class="flex items-center gap-2">
            <span class="font-mono text-slate-500 text-lg">&gt;</span>
            <h3 class="text-xl md:text-2xl font-bold text-slate-200 group-hover:text-white transition-colors">
              {{ entry.role }}
            </h3>
            <span class="font-mono text-slate-600 text-lg hidden md:inline">@</span>
            <span class="font-mono text-emerald-400 text-lg hidden md:inline">{{ entry.company }}</span>
          </div>
        </div>

        <!-- Company on mobile -->
        <div class="pl-4 mb-4 lg:hidden">
          <span class="font-mono text-slate-600 text-sm">@ </span>
          <span class="font-mono text-emerald-400 text-sm">{{ entry.company }}</span>
        </div>

        <!-- Progress bar -->
        <div class="pl-4 mb-5">
          <div class="flex items-center gap-3">
            <div class="h-2 bg-slate-800 flex-1 max-w-md overflow-hidden">
              <div 
                class="progress-fill h-full bg-emerald-500 origin-left"
                :style="{ width: getProgressWidth(entry.months) }"
              ></div>
            </div>
            <span class="font-mono text-xs text-slate-600 flex-shrink-0">
              {{ entry.durationLabel }}
            </span>
          </div>
        </div>

        <!-- Highlights / log entries -->
        <ul class="pl-4 space-y-2 border-l-2 border-slate-800 group-hover:border-emerald-500/30 transition-colors ml-4">
          <li 
            v-for="(highlight, i) in entry.highlights" 
            :key="i"
            class="font-mono text-sm text-slate-400 pl-4 leading-relaxed"
          >
            <span class="text-slate-600 mr-2">&gt;</span><span v-html="parseHighlight(highlight)"></span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const { tm, rt } = useI18n()

const timelineList = ref<HTMLElement | null>(null)

interface CareerEntry {
  period: string
  endLabel?: string
  role: string
  company: string
  highlights: string[]
}

const career = computed<CareerEntry[]>(() => {
  const rolesMap = tm('career.roles') as Record<string, any>;
  return ['backend', 'pm', 'appsheet', 'da'].map(key => {
    const roleData = rolesMap[key] || {};
    return {
      period: roleData.period ? rt(roleData.period) : '',
      role: roleData.role ? rt(roleData.role) : '',
      company: roleData.company ? rt(roleData.company) : '',
      highlights: (roleData.highlights || []).map((h: any) => rt(h))
    }
  })
})

function getDurationInfo(period: string) {
  const parts = period.split('→').map(p => p.trim())
  if (parts.length < 2) return { months: 0, label: '' }

  const parseDate = (s: string): Date => {
    const segments = s.split('.')
    const year = Number(segments[0] || '2022')
    const month = Number(segments[1] || '1')
    return new Date(year, month - 1)
  }

  const start = parseDate(parts[0])
  const end = parseDate(parts[1])
  const diffTime = Math.abs(end.getTime() - start.getTime())
  const months = Math.round(diffTime / (1000 * 60 * 60 * 24 * 30.44)) // Use average month length

  let label = ''
  if (months >= 12) {
    const years = Math.floor(months / 12)
    const remainingMonths = months % 12
    label = remainingMonths > 0 
      ? `${years}${$t('career.years_short')} ${remainingMonths}${$t('career.months_short')}` 
      : `${years}${$t('career.years_short')}`
  } else {
    label = `${months}${$t('career.months_short')}`
  }

  return { months, label }
}

const careerWithDuration = computed(() => {
  return career.value.map(entry => {
    const info = getDurationInfo(entry.period)
    return { ...entry, months: info.months, durationLabel: info.label }
  })
})

const maxMonths = computed(() => {
  const allMonths = careerWithDuration.value.map(e => e.months)
  return Math.max(...allMonths, 1) // Avoid division by zero
})

function getProgressWidth(months: number): string {
  // Use maxMonths as 100% reference
  const percentage = (months / maxMonths.value) * 100
  return `${Math.max(percentage, 5)}%` // Minimum 5% width for visibility
}

onMounted(() => {
  if (timelineList.value) {
    const entries = timelineList.value.querySelectorAll('.timeline-entry')
    
    gsap.fromTo(entries,
      { opacity: 0, x: -30 },
      {
        opacity: 1, 
        x: 0, 
        duration: 0.7, 
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: timelineList.value,
          start: 'top 80%',
        }
      }
    )

    // Animate progress bars
    const progressBars = timelineList.value.querySelectorAll('.progress-fill')
    gsap.fromTo(progressBars,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: timelineList.value,
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
