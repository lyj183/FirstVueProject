<!-- 具名插槽 -->
<template>
<div class="container">
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot>
      只有在没有要分发的内容时才会显示。
    </slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>
</template>