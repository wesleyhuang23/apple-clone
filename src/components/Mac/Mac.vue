<template>
    <div>
        <chapterNav></chapterNav>
        <macBookProChapter></macBookProChapter>
        <macBookChapter></macBookChapter>
        <iMacChapter></iMacChapter>
    </div>
</template>

<script>
import chapterNav from './MacChapterNav';
import macBookProChapter from './MacBookProChapter';
import macBookChapter from './MacBookChapter';
import iMacChapter from './iMacChapter';

export default{
    name: 'Mac',
    components: {
        chapterNav,
        macBookProChapter,
        macBookChapter,
        iMacChapter,
    },
}
</script>

<style>
</style>