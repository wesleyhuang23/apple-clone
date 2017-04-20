<template>
    <div>
        <chapterNav></chapterNav>
        <macBookProChapter></macBookProChapter>
        <macBookChapter></macBookChapter>
    </div>
</template>

<script>
import chapterNav from './MacChapterNav';
import macBookProChapter from './MacBookProChapter';
import macBookChapter from './MacBookChapter';

export default{
    name: 'Mac',
    components: {
        chapterNav,
        macBookProChapter,
        macBookChapter,
    },
}
</script>

<style>
</style>