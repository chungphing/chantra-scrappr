<template>
    <div class="grid">
        <!-- loop all item here -->
        <div v-for="product in loadedProducts" :key="product" class="grid-item">
            <div class="grid-item-img"><img :src="product.image_url" alt="thumb"></div>
            <div class="grid-item-text">
                <h4 class="grid-item-title">{{ product.title }}</h4>
                <h4 class="grid-item-price">{{ product.price }}</h4>
                <div class="grid-item-spec">
                    {{ product.spec }}
                </div>
            </div>
        </div>
        <div class="loadmore"><span>Load More</span></div>
    </div>
</template>
<script>
import db from '@/firebase/init'

export default {
  name: 'GridList',
  data () {
    return {
      error: null,
      loading: null,
      loadedProducts: null
    }
  },
  methods: {
    fetchData () {
      console.log('fetching data')
      db.collection('laptops')
        .orderBy('created_at')
        .limit(50)
        .get()
        .then(products => {
          let loadedProducts = []
          products.docs.forEach(doc => {
              let data = doc.data()
              if(data){
                 loadedProducts.push(data)
              }
          })
          this.loadedProducts = loadedProducts
        })
    }
  },
  created () {
    this.fetchData()
  }
}
</script>

<style scoped>
.grid {
  flex-wrap: wrap;
  display: flex;
}

.grid-item h4,
.grid-item a,
.grid-item p {
  margin: 0;
  padding: 0;
}
.grid-item {
  padding: 2px;
}
.grid-item img {
  border-radius: 2px;
}
.grid-item:hover {
  background-color: #fafafa;
  cursor: pointer;
}
.image {
  max-width: 100%;
}
.loadmore{
  display: flex;
  width: 100%;
  height: 50px;
  text-align: center;
  align-items: center;
  justify-content: center;
  border: 1px solid #e0e0e0;
  border-radius: 2px;
  margin: 40px 20px;
}
.loadmore:hover{
  background-color: #ececec;
  cursor: pointer;
}
.grid-item-spec {
  font-size: 8px;
}

/* DESKTOP QUERY */
@media screen and (min-width: 60em) {
  .grid-item {
    width: calc(98% / 5);
  }
}
</style>
