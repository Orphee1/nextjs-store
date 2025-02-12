'use client'
import { useState } from 'react'
import { SubmitButton } from '@/components/form/Button'
import FormContainer from '@/components/form/FormContainer'
import { Card } from '@/components/ui/card'
import RatingInput from '@/components/reviews/RatingInput'
import TextAreaInput from '@/components/form/TextArea'
import { Button } from '@/components/ui/button'
import { createReviewAction } from '@/utils/actions'
import { useUser } from '@clerk/nextjs'

function SubmitReview({ productId }: { productId: string }) {
  const [isReviewFormVisible, setReviewFormVisible] = useState(false)
  const { user } = useUser()
  if (!user) return

  return (
    <div>
      <Button
        size='lg'
        className=''
        onClick={() => setReviewFormVisible((prevState) => !prevState)}
      >
        Donnez votre avis !
      </Button>
      {isReviewFormVisible && (
        <Card className='p-8 mt-8'>
          <FormContainer action={createReviewAction}>
            <input type='hidden' name='productId' value={productId} />
            <input
              type='hidden'
              name='authorName'
              value={user?.firstName || 'User'}
            />
            <input type='hidden' name='authorImageUrl' value={user?.imageUrl} />
            <RatingInput labelText='évaluation' name='rating' />
            <TextAreaInput
              name='comment'
              labelText='avis'
              defaultValue='Super produit !!!'
            />
            <SubmitButton className='mt-4' />
          </FormContainer>
        </Card>
      )}
    </div>
  )
}

export default SubmitReview
