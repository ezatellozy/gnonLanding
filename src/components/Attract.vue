<template>
  <div class="bg-third py-11">
    <div class="container mx-auto flex justify-center flex-wrap">
      <attract-card
        v-for="feature in items"
        :key="feature.id"
        :items="feature"
      />
    </div>
  </div>
</template>

<script>
import AttractCard from '@/components/AttractCard.vue'
export default {
  props: ['items'],
  components: { AttractCard },

  data() {
    return {
      features: [
        {
          id: 1,
          titleEn: 'Follow up on potential clients',
          titleAr: 'متابعة العملاء المحتملين',
          descriptionAr:
            'يساعدك   <span class="text-titleColor font-bold">رواد CRM</span> في الوصول لعملائك المحتملين حتي يصبحوا عملاء حقيقيين',
          descriptionEn:
            '<span class="text-titleColor font-bold">Rwad CRM </span> help you reach your potential customers so that they become real customers',
          imgSrc: './client-1.webp',
        },
        {
          id: 2,
          titleEn: 'Preparing accurate reports and analytics',
          titleAr: 'إعداد التقارير والتحليلات الدقيقة',
          descriptionAr:
            'من خلال التقارير التي يعدها لك   <span class="text-titleColor font-bold">رواد CRM</span> , يمكنك معرفة نشاط فريق المبيعات ومتابعه نتائجهم بشكل دوري ودقيق',
          descriptionEn:
            'Through the reports prepared for you by <span class="text-titleColor font-bold">Rwad CRM </span>, you can know the activity of the sales team and follow up on their results periodically and accurately',
          imgSrc: './reports1.png',
        },
        {
          id: 3,
          titleEn: 'Rwad CRM always with you',
          titleAr: 'رواد CRM دائما بحوزتك',
          descriptionAr:
            'من خلال تطبيق الجوال, يمكنك الوصول  <span class="text-titleColor font-bold">لرواد CRM</span> في اي وقت واي مكان لتسجيل بيانات العملاء',
          descriptionEn:
            'Through the mobile application, you can access <span class="text-titleColor font-bold">Rwad CRM </span> anytime and anywhere to record customer data',
          imgSrc: './mobile-1.png',
        },
      ],
    }
  },
}
</script>

<style></style>
