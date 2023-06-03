import { createStore } from 'vuex'



export default createStore({
  state(){
    return{
      item:"dio",
      count:0,
      selectedQuantity:1,
      lineItems:[

      ],
      products: [
        {
          id:"Dress",
          name:"Dress",
          price:"price_1MnZL7DJLO7TSIIwI06a83Rb",
          description:"上品でエレガントな黒いドレス。胸元にはゴージャスなレースが施され、ウエストラインにはベルトが付属しています。膝下丈のスカートはふんわりと広がり、女性らしいシルエットを演出します。素材は柔らかく、着心地も抜群。結婚式やパーティーなどのフォーマルなシーンにぴったりのアイテムです。",
          cost:"¥1500",
          image:require("/public/images/sozai/dress.jpg")
          // image:require('../../../public/images/sozai/dress.jpg')
        },
        {
          id:"blackshirt",
          name:"Black shirt",
          price:"price_1MrZMdDJLO7TSIIwPSFRdboX",
          description:"シンプルでスタイリッシュな黒いTシャツ。やや薄手の素材で、柔らかく肌触りが良いのが特徴。カジュアルなデザインで、様々なスタイリングに合わせやすく、普段使いにぴったりのアイテムです。また、カジュアルなデニムパンツとの相性も抜群。ストレッチ性のある素材で履き心地も快適です。デイリーカジュアルからアウトドアスタイルまで、様々なシーンで活躍すること間違いなしのアイテムです。",
          cost:"¥2000",
          image:require("/public/images/sozai/bshirt.jpg")
        },
        {
          id:"whiteshirt",
          name:"White shirt",
          price:"price_1MrZMmDJLO7TSIIwEBKrg3Df",
          description:"清潔感あふれる白いシャツ。細身のシルエットが美しく、軽やかな素材で着心地も快適です。襟元はスタンドカラーで、袖口にはボタンが付属しています。カジュアルな着こなしにはデニムパンツと合わせて、ビジネスシーンにはスーツにも合わせられる、汎用性の高いアイテムです。",
          cost:"¥3000",
          image:require("/public/images/sozai/wshirt.jpg")
        },
        {
          id:"pants",
          name:"pants",
          price:"price_1Msd4RDJLO7TSIIwexFiRTVL",
          description:"シンプルで使い勝手の良いデニムパンツ。ストレッチ性のある柔らかい素材で履き心地が良く、シルエットも美しく仕上がっています。ウエストはベルトループが付いており、調整可能なため、自分に合ったサイズで着用することができます。カジュアルな着こなしにはTシャツやスウェットと合わせて、ビジネスシーンにはシャツやジャケットと合わせて、様々なシーンで活躍すること間違いなしのアイテムです。",
          cost:"¥4000",
          image:require("/public/images/sozai/pants.jpg")
        },
        {
          id:"parker",
          name:"parker",
          price:"price_1Msd52DJLO7TSIIwbdBAsdWI",
          description:"清潔感あふれる白いパーカー。肌触りの良い柔らかい素材で、着心地も快適です。フードには調整可能な紐が付いており、袖口と裾にはリブが施されています。シンプルなデザインで、様々なスタイリングに合わせやすく、普段使いにぴったりのアイテムです。また、カジュアルなデニムパンツとの相性も抜群。フードをかぶってカジュアルダウンするのはもちろん、ジャケットと合わせてスマートな着こなしも楽しめます。デイリーカジュアルからアウトドアスタイルまで、様々なシーンで活躍すること間違いなしのアイテムです。",
          cost:"¥5000",
          image:require("/public/images/sozai/parker.jpg")
        },
        {
          id:"onepiece",
          name:"One-piece dress",
          price:"price_1Msd72DJLO7TSIIw4XBk3VzI",
          description:"清潔感あふれる白いワンピース。柔らかな素材で、軽やかな着心地が魅力的です。レースのディテールが施されたエレガントなデザインで、女性らしさを引き立てます。袖は三分丈で、腕を華奢に見せてくれます。ウエストにはベルトが付属しており、ウエストラインを強調したシルエットが美しく仕上がっています。ヒールと合わせて、結婚式やパーティーなどのフォーマルなシーンにぴったりのアイテムです。また、サンダルやスニーカーと合わせて、デイリーカジュアルな着こなしも楽しめます。オールシーズン着用可能で、長く愛用できるアイテムです。",
          cost:"¥6600",
          image:require("/public/images/sozai/onepiece.jpg")
        },
      ]
    }
  },
  getters: {
    cartProducts(state) {
      return Object.values(state.cart)
    },
    cartTotal(state, getters) {
      return getters.cartProducts.reduce((total, product) => {
        return total + (product.quantity * product.product.cost)
      }, 0)
    }
  },
  mutations: {
    addLineItem(state, lineItem) {
      // 既に同じ price の lineItem がある場合は数量をインクリメント
      const existingItem = state.lineItems.find(item => item.price === lineItem.price);
      if (existingItem) {
        existingItem.quantity+=state.selectedQuantity;
      } else {
        // 新しい lineItem を追加
        state.lineItems.push(lineItem);
      }
      state.count+=state.selectedQuantity;
      console.log(state.lineItems);
    },
  },
  actions: {
    addProductToCart({ commit }, product) {
      const lineItem = {
        name: product.name,
        cost: product.cost,
        id: product.id,
        price: product.price,
        quantity: this.state.selectedQuantity,
      };
      commit('addLineItem', lineItem);
    },
  },
  modules: {
  }
})
