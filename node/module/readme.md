## require特性：
1. module被加载的时候执行，加载后缓存（module只会执行一次，然后就会放入缓存中，下次再用的时候，就从缓存中取。）
2. 一旦出现某个模块被循环加载，就只会输出已经执行的部分，还未执行的部分不会输出。

## module.exports 和 exports 的区别
1. exports = module.exports，大部分情况下两者是一样的；
2. exports是具有指向性的，不可以require的时候修改他的指向。