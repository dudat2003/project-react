import { useProductQuery } from '@/hooks/useProductQuery'
import { useParams } from 'react-router-dom'
import NameForm from './form/NameForm'
import PriceForm from './form/PriceForm'
import ImageForm from './form/ImageForm'
import DescForm from './form/DescForm'

const Edit = () => {
    const { id } = useParams()
    const { data } = useProductQuery(id)
    return (
        <div>
            <div className='grid grid-cols-2'>
                <div>
                    <NameForm data={data} />
                </div>
                <div>
                    <PriceForm data={data} />
                </div>
                <div>
                    <ImageForm data={data} />
                </div>
                <div>
                    <DescForm data={data} />
                </div>
            </div>
        </div>
    )
}
export default Edit
