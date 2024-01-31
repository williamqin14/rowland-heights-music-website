import Markdown from 'react-markdown'

export default function Class({ prop }) {
    return (
        <div className='flex flex-col py-5 text-center border-4 border-black my-3'>
            <div className='text-2xl font-bold uppercase'>{prop.class_title}</div>
            <div className>{prop.class_description}</div>
            <Markdown className='p-2'>{prop.schedules}</Markdown>
            <div className='flex flex-row justify-center gap-4'>
                <div><strong>Class Fee: </strong>{prop.class_fee}</div>
                <div><strong>Material Fee: </strong>{prop.material_fee}</div>
                <div><strong>Instructor: </strong>{prop.instructor}</div>
            </div>
            <Markdown className='p-2'>{prop.additional_info}</Markdown>
        </div>
    )
}
