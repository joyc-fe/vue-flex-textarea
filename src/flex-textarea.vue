<template>
       <autosize-textarea
       :rows="rows"
       :class="class"
       :value="value"
       :placeholder='placeholder'
       resized="onResized">
       </autosize-textarea>
</template>

<script type="text/ecmascript-6">
    /**
     * @file flex-textarea
     * @author joyc-fe
     *
     * @since 3/27/2017
     */
    import autosize from './autosize';
    const template = '<textarea :rows="rows"  :value="value" :class="class" :placeholder="placeholder"></textarea>'
    const autosizeTextarea = {
        props: ['rows','value','class','placeholder','resized'],
        template: template,
        ready () {
            autosize(this.$el);
            if (this.resized) {
                this.$parent[this.resized](this.$el)
            }
        }
    };

    export default {
        props: [
              'rows','value','placeholder','class','resized'
        ],
        data() {
        },
        methods: {
            onResized () {
               if (this.resized ) {
                    if(!this.$parent[this.resized]){
                     throw ' function "'+ this.resized +'" not found ';
                    }
                    return this.$parent[this.resized](this.$el)
                  }
            }
        },

        components: {
            autosizeTextarea
        },
        created(){
        }
    }
</script>

<style  rel="stylesheet/css">
    textarea{
        font-size: .4rem;
    }
    *{ font-size: .4rem;}
</style>

