<template>
    <div>
        <chapterNav></chapterNav>
        <macBookProChapter></macBookProChapter>
        <macBookChapter></macBookChapter>
        <iMacChapter></iMacChapter>
        <Compare></Compare>
        <Accessories></Accessories>
        <MacOSchapter></MacOSchapter>
    </div>
</template>

<script>
import chapterNav from './MacChapterNav';
import macBookProChapter from './MacBookProChapter';
import macBookChapter from './MacBookChapter';
import iMacChapter from './iMacChapter';
import Compare from './Compare';
import Accessories from './Accessories';
import MacOSchapter from './MacOSchapter';

export default{
    name: 'Mac',
    components: {
        chapterNav,
        macBookProChapter,
        macBookChapter,
        iMacChapter,
        Compare,
        Accessories,
        MacOSchapter,
    },
}
</script>

<style>
</style>