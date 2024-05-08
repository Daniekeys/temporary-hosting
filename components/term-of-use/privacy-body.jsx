import React from "react";
import ContainerLayout from "../../layouts/ContainerLayout";


const contents = [
  {
    title: "Introduction",
    story: `Lorem ipsum dolor sit amet consectetur. Non egestas nascetur felis netus mi malesuada tempor mi aliquam. Eget tristique arcu sollicitudin vulputate amet. Eu dis elementum ultrices nisi lacus ut pretium ipsum. Sodales quis scelerisque mi feugiat. At neque imperdiet ut libero dui id sit et massa. Non amet phasellus proin dui. Et consectetur dui amet viverra. Diam id vitae viverra mattis donec blandit et ut fames. Qualitative nec non enim tellus dui velit elit. Ipsum ornare cras euismod dictumst fermentum velit nibh. In ullamcorper varius in imperdiet nunc tellus ornare nunc. Ac sagittis mi cursus id quisque vitae vel dolor velit.`,
  },
  {
    title: "Information We collect",
    story: `In augue faucibus risus elit pellentesque diam sit. Orci mus non ut rhoncus vitae nibh vitae purus. Sed eu quam vivamus quis sed fames. Justo natoque non sed felis feugiat nec viverra at id. Tempus eros id in pellentesque at morbi congue. Nulla nisl lacus tellus dolor odio risus eu vestibulum maecenas.
Egestas pharetra qualitative netus eget eu id sapien ultricies. Massa erat consectetur nulla aenean ornare tincidunt quam ut. Odio at eget habitant et. Scelerisque id in quis magna pellentesque. Commodo id duis eleifend vel vitae amet id ante. Eget aliquet egestas ultrices pharetra et. Id ultrices tellus adipiscing nec arcu ipsum montes phasellus. Ipsum eu venenatis justo amet vitae ut malesuada. Pretium sit volutpat faucibus vitae. In non erat tincidunt convallis nunc odio morbi arcu.
Praesent sit erat nascetur magna. Lacus blandit nisl viverra enim arcu scelerisque. Porta pretium feugiat scelerisque faucibus. Suspendisse placerat non facilisi vel mi consectetur odio fames semper. Augue in turpis auctor dictum purus lorem donec. Ac convallis quis metus ullamcorper eu sollicitudin.
`,
  },
  {
    title: "Why we collect the information",
    story: `Cras eget risus cras auctor accumsan vitae purus augue. Dolor ullamcorper vel lectus vitae. Aenean elit mauris diam malesuada penatibus mattis. Pellentesque enim scelerisque scelerisque aliquet consequat vulputate. Consectetur id cras nulla aliquam tempor leo. Eget praesent proin pellentesque luctus augue sit enim scelerisque nulla.
Dui ac dui purus ultrices adipiscing odio. Feugia Qualitative nullam sollicitudin urna purus elementum. Urna risus urna dignissim enim egestas. Lobortis auctor nisl morbi elit sapien dictum dui. Proin suspendisse mauris egestas lectus nisi cursus blandit pellentesque. Tincidunt eu viverra
`,
  },
  {
    title: "Principles of processing",
    story: `Cras eget risus cras auctor accumsan vitae purus augue. Dolor ullamcorper vel lectus vitae. Aenean elit mauris diam malesuada penatibus mattis. Pellentesque enim scelerisque scelerisque aliquet consequat vulputate. Consectetur id cras nulla aliquam tempor leo. Eget praesent proin pellentesque luctus augue sit enim scelerisque nulla.
Dui ac dui purus ultrices adipiscing odio. Feugia Qualitative nullam sollicitudin urna purus elementum. Urna risus urna dignissim enim egestas. Lobortis auctor nisl morbi elit sapien dictum dui. Proin suspendisse mauris egestas lectus nisi cursus blandit pellentesque. Tincidunt eu viverra`,
  },
  {
    title: "Disclosure",
    story: `Cras eget risus cras auctor accumsan vitae purus augue. Dolor ullamcorper vel lectus vitae. Aenean elit mauris diam malesuada penatibus mattis. Pellentesque enim scelerisque scelerisque aliquet consequat vulputate. Consectetur id cras nulla aliquam tempor leo. Eget praesent proin pellentesque luctus augue sit enim scelerisque nulla.
Dui ac dui purus ultrices adipiscing odio. Feugia Qualitative nullam sollicitudin urna purus elementum. Urna risus urna dignissim enim egestas. Lobortis auctor nisl morbi elit sapien dictum dui. Proin suspendisse mauris egestas lectus nisi cursus blandit pellentesque. Tincidunt eu viverra`,
  },
 
];
const PrivacyBody = () => {
  return (
    <ContainerLayout>
          <div className="w-full flex flex-col gap-y-10">
              {contents?.map((item) => {
                  return (
                      <div className="w-full flex flex-col gap-4">
                          <h1 className=" text-2xl  lg:text-[40px] font-medium text-customBlack">
                              {item.title}
                          </h1>
                          <p className=" text-base lg:text-xl font-normal text-ash ">
                              {item?.story}
                          </p>
                      </div>
                  )
              })}
      </div>
    </ContainerLayout>
  );
};

export default PrivacyBody;
