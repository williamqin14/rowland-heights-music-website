import Markdown from 'react-markdown'

export default function Class({ prop }) {
    return (
        <div className='flex flex-col py-5 text-center border-4 border-black my-3'>
            <div className='text-2xl font-bold uppercase'>{prop.class_title}</div>
            <div>{prop.class_description}</div>
            {prop.classes.map((c, k) => (
              <div key={k} className='flex flex-row justify-center gap-4'>
                <div>{c.level}</div>
                <div>{c.ages}</div>
                <div>{c.day}</div>
                <div>{c.day_range}</div>
                <div>{c.time_range}</div>
              </div>
            ))}
            <div className='flex flex-row justify-center gap-4'>
                <div><strong>Class Fee: </strong>{prop.class_fee}</div>
                <div><strong>Material Fee: </strong>{prop.material_fee}</div>
                <div><strong>Instructor: </strong>{prop.instructor}</div>
            </div>
            <Markdown className='p-2'>{prop.additional_info}</Markdown>
        </div>
    )
}
