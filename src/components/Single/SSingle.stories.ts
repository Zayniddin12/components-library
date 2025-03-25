import { Story } from "@storybook/vue3";

import SSingle from "./SSingle.vue";

export default {
  title: "Components/News/Single",
  component: SSingle,
};

const Template: Story = (args) => ({
  components: {
    SSingle,
  },
  setup() {
    return { args };
  },
  template: `
    <SSingle v-bind="args" />
  `,
});

export const SinglePage = Template.bind({});
SinglePage.args = {
  data: {
    published_date: "23-Iyul, 2005",
    published_date_hour: "19:00",
    image: "https://picsum.photos/339/191",
    title:
      "Abdusattorov yana bir turnirda ishtirok etadi - unga kimlar raqiblik qilishi mumkin?",
    short_description:
      "Oʻzbekiston shaxmat federatsiyasiga Yevropaning shaxmat sovrinini frantsiyalik mashhur grossmeyster topshirgan.",
    content: `<p>Oʻzbekistonlik Humoyun Bekmurodov dunyoning 576 nafar kuchli shaxmatchilar orasida 3-oʻrinni egalladi. Bu haqda Yoshlar ishlari agentligi direktori Alisher Saʼdullayev maʼlum qildi.<br />Kuni kecha Chess.com da dunyo miqyosida 576 nafar kuchli shaxmatchi oʻrtasida &ldquo;Titled Tuesday&rdquo; onlayn turniri boʻlib oʻtdi. Unda ishtirok etgan Bekmurodov 3-oʻrinni qoʻlga kiritdi.</p><p>Maʼlumot uchun, Humoyun 6 yoshidayoq shaxmat boʻyicha avvaliga mamlakat, soʻngra Osiyo chempionligini qoʻlga kiritgan.<br />2020 yilda Humoyun shaxmat boʻyicha havaskorlar oʻrtasida Oʻzbekiston chempionatida gʻolib chiqdi va &ldquo;Spark&rdquo; avtomashinasi bilan taqdirlandi.<br />U oʻtgan yil fevralida Xalqaro shaxmat federatsiyasi (FIDE) sport ustasi unvoniga sazovor boʻlgan.</p><p>Shuningdek, u Gretsiyadagi shaxmat boʻyicha yoshlar oʻrtasidagi jahon chempionatida &quot;Open12&quot; guruhida ham rapid, ham blits boʻyicha kumush medal sohibiga aylangan.<br />Bu yil rapid va blits boʻyicha Olmaotada (Qozogʻiston) boʻlib oʻtgan jahon chempionatida Bekmurodov hammani hayratga soldi. U Uels vakili Elijah Everettga qarshi oʻyinda chiroyli gʻalabasi bilan yakun yasashga muvaffaq boʻldi.</p><p></p><blockquote><p>Maʼlumot uchun, Humoyun 6 yoshidayoq shaxmat boʻyicha avvaliga mamlakat, soʻngra Osiyo chempionligini qoʻlga kiritgan.<br />2020 yilda Humoyun shaxmat boʻyicha havaskorlar oʻrtasida Oʻzbekiston chempionatida gʻolib chiqdi va &ldquo;Spark&rdquo; avtomashinasi bilan taqdirlandi.<br />U oʻtgan yil fevralida Xalqaro shaxmat federatsiyasi (FIDE) sport ustasi unvoniga sazovor boʻlgan.</p></blockquote><p></p><ul><li>Maʼlumot uchun, Humoyun 6 yoshidayoq shaxmat boʻyicha avvaliga mamlakat, soʻngra Osiyo chempionligini qoʻlga kiritgan.</li><li>2020 yilda Humoyun shaxmat boʻyicha havaskorlar oʻrtasida Oʻzbekiston chempionatida gʻolib chiqdi va &ldquo;Spark&rdquo; avtomashinasi bilan taqdirlandi.</li><li>U oʻtgan yil fevralida Xalqaro shaxmat federatsiyasi (FIDE) sport ustasi unvoniga sazovor boʻlgan.</li><li>Shuningdek, u Gretsiyadagi shaxmat boʻyicha yoshlar oʻrtasidagi jahon chempionatida &quot;Open12&quot; guruhida ham rapid, ham blits boʻyicha kumush medal sohibiga aylangan.</li><li>Bu yil rapid va blits boʻyicha Olmaotada (Qozogʻiston) boʻlib oʻtgan jahon chempionatida Bekmurodov hammani hayratga soldi. U Uels vakili Elijah Everettga qarshi oʻyinda chiroyli gʻalabasi bilan yakun yasashga muvaffaq boʻldi.</li></ul><p><img alt=\\"Cristiano Ronaldo Profile | PlanetSport\\" src="https://www.planetsport.com/image-library/square/1200/c/cristiano-ronaldo-portugal-5-june-2022.jpg" /></p><ol><li>Oʻzbekistonlik Humoyun Bekmurodov dunyoning 576 nafar kuchli shaxmatchilar orasida 3-oʻrinni egalladi. Bu haqda Yoshlar ishlari agentligi direktori Alisher Saʼdullayev maʼlum qildi.</li><li>Kuni kecha Chess.com da dunyo miqyosida 576 nafar kuchli shaxmatchi oʻrtasida &ldquo;Titled Tuesday&rdquo; onlayn turniri boʻlib oʻtdi. Unda ishtirok etgan Bekmurodov 3-oʻrinni qoʻlga kiritdi.</li></ol>`,
  },
  loading: false,
};
