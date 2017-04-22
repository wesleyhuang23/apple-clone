<template>
    <div>
        <chapterNav></chapterNav>
        <macBookProChapter></macBookProChapter>
        <macBookChapter></macBookChapter>
        <iMacChapter></iMacChapter>
        <Compare></Compare>
        <Accessories></Accessories>
        <MacOSchapter></MacOSchapter>
        <AmazingApps></AmazingApps>
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
import AmazingApps from './AmazingApps';


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
        AmazingApps,
    },
}
</script>

<style>
</style>