import React from 'react';
import Vue from 'vue';
import wrap from '@vue/web-component-wrapper';
import { useChange, useSelect } from '../../dataHelpers';
import api from '../../api/movies/api';

const CustomElement = wrap(Vue, {
    template: `
        <div style="display: flex; flex-wrap: wrap">
            <input type="text" v-model="query" @change="handleChange">        
            <div v-for="item in filtered" :data-id="item.show.id" @click="handleClick">
                <div>
                    <div>{{item.show.name}}</div>
                    <div>
                        <img :src="item.show.image.medium" alt="sdas" />
                    </div>
                    <div>
                        score: {{item.score}}
                    </div>
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            query: '',
            data: [],
            selected: {},
            open: false
        };
    },
    methods: {
        setQuery(val) {
            this.query = val;
        },
        setData(val) {
            this.data = val;
        },
        handleChange(e) {
            return useChange(api.fetch, this.setQuery, this.setData)(e);
        //     const { value } = e.target;
        //     this.setQuery(value)
        //     api.fetch(value)
        //         .then(this.setData);
        },
        setSelected(val) {
            this.selected = val;
        },
        toggleOpen() {
            this.open = !this.open;
        },
        handleClick(e) {
            return useSelect(api.getSelected, null, this.setSelected, this.toggleOpen)(e);
            // const { dataset } = e.currentTarget;
            // const { id } = dataset;
            // api.getSelected(id)
            //     .then((res) => {
            //         this.setSelected(res);
            //         this.toggleOpen();
            //     });
        },

    },
    computed: {
        filtered() {
            return this.data.reduce((acc, next) => {
                if (next.show.image) {
                    return acc.concat(next);
                }
                return acc;
            }, []);
        }
    }
});

global.window.customElements.define('vue-movies', CustomElement);

const VueMovies = () => (
    <vue-movies />
);

export default VueMovies;
