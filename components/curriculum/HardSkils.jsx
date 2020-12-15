
import CardHardSkils from '../partials/CardProjetos';
import FaixaHardSkil from '../partials/FaixaHardSkils'
import CardSkils from '../partials/CardSkils'

export default function HardSkils(){
    return(
  <div class="py-12 bg-white">
      <FaixaHardSkil />
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight  text-red-500 sm:text-4xl py-8 text-center px-20 ">
        Hard Skils
      </p>
     
        <div class="lg:text-center">
          
              <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Marketing, Performance & Transformação Digital.
          </p>
        </div>
        <CardSkils />
  </div>
</div>
    )
}