<template>
  <section class="w-full">
    <div class="mb-12 flex items-end justify-between">
      <h2 class="text-4xl md:text-5xl font-bold tracking-tighter text-slate-100 uppercase">
        <span class="text-emerald-500 font-mono text-xl block mb-2 opacity-70">/* 04 */</span>
        {{ $t('certs.title') }}
      </h2>
      <div class="hidden md:block font-mono text-sm text-slate-500 uppercase tracking-widest">
        {{ $t('certs.subtitle') }}
      </div>
    </div>

    <!-- Brutalist Grid for Certificates -->
    <div class="border-t-2 border-l-2 border-slate-800 relative">
      <div ref="certList" class="grid grid-cols-1 overflow-y-auto max-h-[420px] custom-scrollbar">
        <a 
          v-for="(cert, index) in certificates" 
          :key="index"
          :href="cert.link"
          target="_blank"
          class="cert-item group flex flex-col md:flex-row justify-between items-start md:items-center p-8 border-r-2 border-b-2 border-slate-800 hover:bg-emerald-500/5 transition-colors duration-300 relative overflow-hidden"
        >
          <!-- Hover indicator line -->
          <span class="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500 transform scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300"></span>
          
          <div class="flex items-center gap-6 z-10 w-full mb-4 md:mb-0">
            <!-- Icon -->
            <div class="w-12 h-12 flex-shrink-0 bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-500 group-hover:text-emerald-400 group-hover:border-emerald-500/50 transition-colors">
              <Icon name="simple-icons:udemy" class="text-2xl" />
            </div>
            
            <div class="flex-1">
              <h3 class="text-xl md:text-2xl font-bold text-slate-300 group-hover:text-emerald-400 transition-colors duration-300">
                {{ cert.title }}
              </h3>
              <p class="font-mono text-sm text-slate-500 mt-2 tracking-widest uppercase">
                {{ cert.platform }} // {{ cert.id }}
              </p>
            </div>
          </div>

          <div class="z-10 md:ml-6 flex-shrink-0">
            <span class="font-mono text-xs px-4 py-2 border border-slate-700/50 text-slate-400 group-hover:border-emerald-500/30 group-hover:text-emerald-300 transition-colors">
              {{ $t('certs.verify') }} ↗
            </span>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const certList = ref(null)

const certificates = [
  {
    title: 'DevOps Deployment Automation with Terraform, AWS and Docker',
    platform: 'Udemy',
    id: 'UC-488b0f96-388e',
    link: 'https://www.udemy.com/certificate/UC-488b0f96-388e-4cca-b3e1-02ed172c2560/'
  },
  {
    title: 'Fundamentals of Database Engineering',
    platform: 'Udemy',
    id: 'UC-94ba15c0-f451',
    link: 'https://www.udemy.com/certificate/UC-94ba15c0-f451-4930-b419-b391e154fc77/'
  },
  {
    title: 'Master the Coding Interview: Data Structures + Algorithms',
    platform: 'Udemy',
    id: 'UC-eec69814-bac8',
    link: 'https://www.udemy.com/certificate/UC-eec69814-bac8-4e3a-8ace-7b07ea758c4b/'
  },
  {
    title: 'Thành Thạo Docker Từ Cơ Bản Đến Nâng Cao',
    platform: 'Udemy',
    id: 'UC-92f82cb1-c0b2',
    link: 'https://www.udemy.com/certificate/UC-92f82cb1-c0b2-43db-ae22-25aacb1d714a/'
  },
  {
    title: 'Làm Chủ Git và GitHub Từ A đến Z',
    platform: 'Udemy',
    id: 'UC-d630c4cd-70a1',
    link: 'https://www.udemy.com/certificate/UC-d630c4cd-70a1-4ee9-88c8-e343ff6ae271/'
  }
]

onMounted(() => {
  if (certList.value) {
    const items = (certList.value as HTMLElement).querySelectorAll('.cert-item')
    
    gsap.fromTo(items,
      { opacity: 0, x: -20 },
      {
        opacity: 1, 
        x: 0, 
        duration: 0.6, 
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: certList.value,
          start: 'top 85%',
        }
      }
    )
  }
})
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: rgba(15, 23, 42, 0.4); 
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(51, 65, 85, 0.7); 
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(16, 185, 129, 0.6); 
}
</style>
