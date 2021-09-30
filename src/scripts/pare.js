import Fill from '../../src/components/Fill.vue'

export default {
    name: 'Pare',

    components: {
        Fill
    },
    data() {
        return {
            itemsFill: [{
                nom: 'Item 1', mes: 0
            },
            {
                nom: 'Item 2', mes: 0
            },
            {
                nom: 'Item 3', mes: 0
            }
            ]
        }
    }
}