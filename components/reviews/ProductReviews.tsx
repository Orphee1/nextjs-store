import { fetchProductsReviews } from '@/utils/actions'
import SectionTitle from '../global/SectionTitle'
import ReviewCard from './ReviewCard'

async function ProductReviews({ productId }: { productId: string }) {
  const reviews = await fetchProductsReviews(productId)

  return (
    <div className='mt-16'>
      <SectionTitle text='Avis sur cet article' />
      <div className='grid md:grid-cols-2 gap-8 my-8'>
        {reviews.map((review) => {
          const { comment, rating, authorImageUrl, authorName } = review

          const reviewInfo = {
            comment,
            rating,
            image: authorImageUrl,
            name: authorName,
          }
          return <ReviewCard key={review.id} reviewInfo={reviewInfo} />
        })}
      </div>
    </div>
  )
}

export default ProductReviews
