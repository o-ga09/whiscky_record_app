<template>
  <div class="w-full">
    <HeaderComponet title="プライバシーポリシー" class="h-2/5 mb-10 font-bold text-2xl md:text-4xl bg-amber-200"/>
    <main class="h-auto w-4/5 md:w-1/2 left-0 right-0 m-auto">
      <p class="mb-10">o-ga09(以下「当社」といいます。)は、当社がウイスキービギナー(以下「本サービス」といいます。)を提供するにあたり、ご利用される皆様(以下「利用者」といいます。)の個人に関する情報(以下「個人情報」といいます。)を取得します。</p>
      <ol>
        <section class="mb-10">
          <li class="font-bold">(適用範囲)</li>
          <p>本プライバシーポリシー(以下「本ポリシー」といいます。)は、当社が利用者から個人情報を取得、利用及び管理するときに適用されます。</p>
        </section>
        
        <section class="mb-10">
          <li class="font-bold">(取得する情報)</li>
          <p>当社は、利用者から以下の情報を取得します。</p>
          <li>(1) 閲覧したURL及び日時に関するタイムスタンプ</li>
          <li>(2) googleログインにより得られるトークン</li>
        </section>
        
        <section class="mb-10">
          <li class="font-bold">(利用目的)</li>
          <p>当社が個人情報を収集・利用する目的は、以下のとおりです。</p>
          <li>(1) 本サービスの提供・運営のため</li>
          <li>(2) 本サービスの会員であるお客様の管理のため</li>
          <li>(3) 広告効果の分析、市場分析、マーケティングのため</li>
          <li>(4) 本サービスの各種問合せ、アフターサービス対応のため</li>
          <li>(5) 本サービスその他のコンテンツの開発・改善のため</li>
          <li>(6) 上記の利用目的に付随する目的</li>
        </section>
        
        <section class="mb-10">
          <li class="font-bold">4.(Cookieの利用)</li>
          <p>当社は、ウェブサイト及び本サービス(以下、これらを総称して「ウェブサイ
              ト等」といいます。)のアクセス及び利用状況の分析、広告配信並びにウェブサ
              イト等の利便性向上のために、ウェブサイト等にアクセスした利用者の情報通信
              端末に保存されるCookie等のファイル及びこれに類似する技術を取得することが
              あります。当社は、Cookie等と利用者の個人情報を関連付けることがあります。
              当社は、利用者の個人情報と関連付けたCookie等が利用者の個人情報であること
              に鑑み、当該Cookie等を本ポリシーの定めに従って管理いたします。また、当社
              は、Cookie等の情報を第三者が運営するデータ・マネジメント・プラットフォー
              ムに提供し、当該第三者からCookie等により収集されたウェブの閲覧履歴及びそ
              の分析結果を取得し、これらを利用者の個人データと結び付けた上で、広告配信
              等の目的で利用することがあります。
            </p>
        </section>
        
        <section class="mb-10">
          <li class="font-bold">(お問い合わせ)</li>
          <p>
            当社の個人情報の取扱いに関するご相談や苦情等のお問い合わせについては、
            下記の窓口にご連絡ください。
            個人情報取扱事業者:o-ga09
            住所:
            Eメールアドレス:homura9927@gmail.com
          </p>
        </section>
      </ol>
    </main>
    <FooterComponet class="flex w-full bottom-0 justify-center bg-amber-200"/>
  </div>
</template>

<script>
import FooterComponet from '../components/Footer.vue'
import HeaderComponet from '../components/Header.vue'

export default {
  components: {FooterComponet,HeaderComponet},
  name: 'Terms_of_service'
}
</script>