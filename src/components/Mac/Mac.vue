<template>
    <div>
        <chapterNav></chapterNav>
        <macBookProChapter></macBookProChapter>
    </div>
</template>

<script>
import chapterNav from './MacChapterNav';
import macBookProChapter from './MacBookProChapter';

export default{
    name: 'Mac',
    components: {
        chapterNav,
        macBookProChapter
    },
}
</script>

<style>
</style>