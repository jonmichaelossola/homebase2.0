<script>
  export let src;
  export let href;
  export let primaryText;
  export let secondaryText;
  let jumpToSrc = "/assets/icons/go-to-link.png";
</script>

<a
  {href}
  class="flex rounded items-center mb-[70px] shadow-cardShadow p-6 transition-shadow duration-300 hover:shadow-2xl"
>
  <img {src} alt="small business" class="w-[80px] h-[80px] mr-5" />
  <div class="flex flex-col">
    <span class="text-2xl text-turquoise-alternate">{primaryText}</span>
    <div class="flex mt-3">
      <span class="mr-5 text-xl text-turquoise">{secondaryText}</span>
      <img src={jumpToSrc} class="w-[40px] h-[40px]" alt="go to link" />
    </div>
  </div>
</a>
