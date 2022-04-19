<template>
  <div class="relative" :class="{ 'is-rtl': locale === 'ar' }">
    <intro />
    <FeaturesSection
      name="features"
      features="true"
      :items="impSub2"
      :mainTitle="
        $i18n.locale == 'en' ? featuresTitle.titleEn : featuresTitle.titleAr
      "
      imgSrc="./details-1.png"
    />
    <FeaturesSection
      name="features"
      features="true"
      :items="impSub1"
      :mainTitle="
        $i18n.locale == 'en' ? featuresTitle.titleEn : featuresTitle.titleAr
      "
      direction="flex-row-reverse"
      imgSrc="./details-1.png"
      withBg
    />

    <attract />

    <MobilApp
      name="mobile-app"
      layout="text-center"
      imgSrc="./mobile.png"
      :mainTitle="$i18n.locale == 'en' ? mobileApp.titleEn : mobileApp.titleAr"
      :description="
        $i18n.locale == 'en' ? mobileApp.descriptionEn : mobileApp.descriptionAr
      "
    />
    <partners />
    <clients />
    <get-started />
    <go-top />
  </div>
</template>

<script>
import Intro from './components/Intro.vue'

import MobilApp from '@/components/MultiSection.vue'
import FeaturesSection from '@/components/MultiSection.vue'
import GoTop from './components/GoTop.vue'
import Partners from './components/Partners.vue'
import Clients from './components/Clients.vue'
import GetStarted from './components/GetStarted.vue'
import Attract from './components/Attract.vue'

export default {
  name: 'App',
  components: {
    MobilApp,
    FeaturesSection,
    Intro,
    Partners,
    GoTop,
    Clients,
    GetStarted,
    Attract,
  },
  data() {
    return {
      mobileApp: {
        titleEn: 'RWAD CRM on your mobile',
        titleAr: 'رواد CRM على جوالك',
        descriptionAr:
          'يتيح لك رواد CRM امكانية الحصول على تطبيق للجوال ، حتى يتيح لك التمكن من الوصول لبيانات عملائك في كل مكان حيث يوفّر عليك الوقت في الرجوع لجهازك المكتبي لتسجيل بيانات عميلك او مراجعة بيناته ، ليُسهل عملية البيع بشكل سريع مع ضمان توفير الدعم الفني للتطبيق بشكل دوري لمعالجة اي اخطاء ، والمحافطة على متابعة عملك دون اضاعة وقت متوفر على متجر جوجل بلاي وآبل ستور',
        descriptionEn:
          'RWAD CRM gives you access to a mobile app, enabling you to be able to access your customers’ data everywhere Where it saves you time in returning to your desktop device to register your customer’s data or review his data, to facilitate the selling process quickly While ensuring that technical support for the application is provided periodically to address any errors, and to keep track of your work without wasting time Available on Google Play and Apple Store',
        imgSrc: './client-1.webp',
      },
      impSub1: [
        {
          id: 1,
          titleEn: 'Reach your customers quickly and in an organized manner',
          titleAr: 'الوصول الي عملاءك بشكل سريع ومنظم',
          descriptionAr:
            'رواد CRM سهل الاستخدام و يكون محدد ومنظم لسهولة التعامل مع كل جزئية حيث يمكن ربطه مع ادارة التسويق بحيث يتم تسجيل العملاء المحتملين مباشرة في البرنامج ثم متابعة العملاء من خلال فريق المبيعات الى ان يصبحوا عملاء فعليين.',
          descriptionEn:
            'RWAD CRM is easy to use, and it is specific and organized for easy handling of each part, as it can be linked with the marketing department so that potential customers are registered directly in the program and then follow up with the customers through the sales team until they become actual customers.',
        },
        {
          id: 2,
          titleEn:
            'Started and completed sales operations in a professional and sophisticated manner',
          titleAr: 'بدأ عمليات البيع واتمامها بشكل احترافي ومتطور',
          descriptionAr:
            'سوف يساعدك رواد CRM في تحديد عمليات البيع لكل مسئول مبيعات وبالتالي ينعكس ذلك على تكبير حجم مبيعاتك ومعرفة اكثر منتج أو خدمة مطلوبة من العملاء وما هي الفئة المستهدفة بالتحديد لتلبية احتياجات العميل.',
          descriptionEn:
            'RWAD CRM will help you in identifying the sales processes for each sales official, and this will be reflected in increasing your sales volume and knowing the most required product or service from customers and what the target group is specifically to meet the customer’s needs.',
        },
        {
          id: 3,
          titleEn:
            'Follow up on your customers and provide the highest level of technical support to satisfy them',
          titleAr: 'متابعة عملائك وتقديم اعلى مستوى من الدعم الفني لارضائهم',
          descriptionAr:
            'يقدم لك رواد CRM مزايا متابعة عملائك بعد اتمام عملية البيع ، لضمان التأكد من مستوى جودة منتجك وللبقاء دائما مع العميل على تواصل ، يقوم رواد CRM بمساعدتك في الوصول للعملاء بشكل دوري للتفاعل معهم بعروضك ومنتجاتك الجديدة ، مع مراعاة اختيار الاوقات المناسبة للتواصل معهم وعدم ازعاجهم بالمكالمات المتتالية بشكل عشوائي',
          descriptionEn:
            'Follow up on your customers and provide the highest level of technical support to satisfy them',
        },
      ],
      impSub2: [
        {
          id: 1,
          titleEn: 'A complete human resource management system',
          titleAr: 'نظام لادارة الموارد البشرية بالكامل',
          descriptionAr:
            'تكامل إدارة الموارد البشرية ومنظومة تكنولوجيا المعلومات المتطورة تساعدك في فهم آلية أنشطة وفاعليلات الموظفين داخل الشركة لتنميتها وتطويرها. وبمساعدة نظام إدارة الموارد البشرية الخاص برواد CRM يجعلك قادر على صياغة أنظمة موارد بشرية مناسبة بناءً على مجال أعمالك ، يوفر لك رواد CRM إدارة هذا المجال من شركتك بوظائف متعددة ومتطورة .تكامل إدارة الموارد البشرية ومنظومة تكنولوجيا المعلومات المتطورة تساعدك في فهم آلية أنشطة وفاعليلات الموظفين داخل الشركة لتنميتها وتطويرها. وبمساعدة نظام إدارة الموارد البشرية الخاص برواد CRM يجعلك قادر على صياغة أنظمة موارد بشرية مناسبة بناءً على مجال أعمالك ، يوفر لك رواد CRM إدارة هذا المجال من شركتك بوظائف متعددة ومتطورة .',
          descriptionEn:
            'The integration of human resources management and the advanced information technology system helps you understand the mechanism of the activities and activities of employees within the company for its development and development. With the help of RWAD CRM human resource management system makes you able to formulate suitable human resources systems based on your business field, RWAD CRM provides you to manage this area of your company with multiple and advanced functions.',
        },
        {
          id: 2,
          titleEn: 'Integrated accounting system',
          titleAr: 'نظام محاسبي متكامل',
          descriptionAr:
            'سواء كنت خبيرًا في المحاسبة أم لا ، فإن رواد CRM هو أفضل برنامج لتسهيل الوصول إلى المعلومات المهمة عن عملائك وشركائك. حيث يضم نظام رواد CRM جميع التفاعلات الحالية والعمليات المحاسبية بين عملائك الحاليين والعملاء الجدد. كما تُستخدم أيضًا لتخصيص الاتصالات لكل عميل بناءً على المعلومات التي جمعتها عنهم. يعد رواد CRM أيضًا أداة قوية لأتمتة العديد من المهام المحاسبية المتكررة ، مما يوفر لك وقتًا ثمينًا. من خلال تطبيق رواد CRM ، ستستفيد مؤسستك من أدوات تتكيف مع عملياتك وتبسط تبادل المعلومات ، وسيساعدك رواد CRM في ادارة حسابات كل العمليات الخاصة بالمبيعات والمخازن واعداد التقارير الخاصة بكل عملية حسابية',
          descriptionEn:
            ' Whether you are an accounting expert or not, Forerunners CRM is the best software to make it easy to access important information about your customers and partners. The RWAD CRM system includes all the existing interactions and accounting processes between your existing and new customers. It is also used to personalize communications for each customer based on the information you have collected about them. CRM Leaders is also a powerful tool for automating many repetitive accounting tasks, saving you valuable time. Through the RWAD CRM application, your organization will benefit from tools that adapt to your operations and simplify the exchange of information, and RWAD CRM will help you manage the accounts of all sales and warehouse operations and prepare reports for each calculation',
        },
        {
          id: 3,
          titleEn:
            'RWAD CRM Your window to improve and develop your business and business',
          titleAr: 'رواد CRM نافذتك لتحسين وتطوير اعمالك ونشاطك التجاري',
          descriptionAr:
            'يقدم رواد CRM تجربة استخدام تناسب اكثر من منظومة حسب نشاطها ، فإذا كان مجال شركتك متعلق بالاعمال الخدمية ( مركز تعليمي – مركز تدريبي – وكالة تسويق – شركة برمجيات ) فإن اختيارك لروادCRM  هو الأنسب حيث انه يساعدك على آلية إدارة منظومتك باسلوب احترافي وشكل منظم ، ويمكنك من خلال رواد CRM قياس اداء كل ادارة من ادارات مؤسستك عبر تقارير دقيقة تحدد تقييم الاداء على مدار مسيرة عمل الشركة ، فِي العصر الحالي ومع ارتفاع توقعات العملاء أكثر مِن أي وقت مضى ومع زيادة المنافسة بين الشركات في كافة المجالات عند البيع عبر الانترنت، يعد توفير تجربة مخصصة للعملاء في كل نقطة يتفاعل فِيها مع العلامة التجارية المفتاح لزيادة ولائهم لها. فإن متابعة عملائك وتقديم اعلى مستوى من الدعم الفني لارضائهم هو طريقك لكسب عملاء جدد ',
          descriptionEn:
            'RWAD CRM provide a user experience that fits more than one system according to its activity. If your company’s field is related to service business (educational center – training center – marketing agency – software company), your choice of RWAD CRM is the most appropriate. As it helps you to manage your system in a professional manner and in an organized form, and through RWAD CRM, you can measure the performance of each of your organization’s departments through accurate reports that determine performance evaluation over the course of the company’s work, in the current era and with higher customer expectations than ever and with an increase in Competition between companies in all areas When selling online, providing a customized experience for customers at every point they interact with the brand is key to increasing their loyalty to it. Following up on your customers and providing the highest level of technical support to satisfy them is your way to gain new customers',
        },
      ],
      featuresTitle: {
        titleEn: 'Importance of RWAD CRM for Your Business',
        titleAr: 'أهمية رواد CRM لاعمالك',
      },
    }
  },

  created() {
    // window.addEventListener('scroll', this.getSection)
    if (this.$i18n.locale == 'ar') {
      document.title = 'رواد CRM | برنامج ادارة علاقات العملاء'
    } else {
      document.title = 'Rwad CRM | Client relations system'
    }
  },

  computed: {
    locale() {
      return this.$store.getters.locale
    },
  },
}
</script>

<style lang="scss">
.fade-in-left {
  animation: fade-in-left 1s linear forwards;
}
.fade-in-right {
  animation: fade-in-right 1s linear forwards;
}
.fade-in-bottom {
  animation: fade-in-bottom 1s linear forwards;
}

.form {
  max-width: 500px;
  margin: 0 auto;
  .form-inputs {
    input,
    textarea {
      @apply px-4 py-2 mb-2 rounded-lg;
    }
    textarea {
      min-height: 100px;
      resize: none;
    }
  }
}

@keyframes fade-in-left {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes fade-in-right {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes fade-in-bottom {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
