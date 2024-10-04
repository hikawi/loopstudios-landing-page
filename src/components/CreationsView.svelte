<script lang="ts">
  const creations = [
    {
      id: "deep-earth",
      name: "Deep Earth",
    },
    {
      id: "night-arcade",
      name: "Night Arcade",
    },
    {
      id: "soccer-team",
      name: "Soccer Team VR",
    },
    {
      id: "grid",
      name: "The        Grid",
    },
    {
      id: "from-above",
      name: "From Up Above VR",
    },
    {
      id: "pocket-borealis",
      name: "Pocket Borealis",
    },
    {
      id: "curiosity",
      name: "The Curiosity",
    },
    {
      id: "fisheye",
      name: "Make It Fisheye",
    },
  ];
</script>

<div class="flex flex-col gap-6 lg:grid lg:grid-cols-4 lg:gap-[1.88rem]">
  {#each creations as creation}
    <a
      class="group cursor-pointer after:absolute after:content-[''] after:inset-0 after:w-full after:h-full after:bg-white/75 after:invisible hover:after:visible relative font-josefin-sans font-light leading-none text-2xl lg:text-[2rem] uppercase"
      href="/"
    >
      <img
        class="w-full h-full object-cover block lg:hidden z-0"
        src={`/mobile/image-${creation.id}.jpg`}
        alt=""
      />
      <img
        class="w-full h-full object-cover hidden lg:block z-0"
        src={`/desktop/image-${creation.id}.jpg`}
        alt=""
      />

      <!-- Dark gradient background to show the text better -->
      <div
        class="absolute hidden lg:block bottom-0 group-hover:hidden left-0 h-2/3 w-full bg-gradient-to-b from-transparent to-black/60 z-10"
      ></div>

      <div
        class="absolute bottom-5 left-5 xl:bottom-8 xl:left-10 text-balance w-[9ch] z-10"
      >
        <h3 class="text-white group-hover:text-black">{creation.name}</h3>
      </div>
    </a>
  {/each}
</div>
