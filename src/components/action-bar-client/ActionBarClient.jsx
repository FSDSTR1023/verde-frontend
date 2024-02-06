export const ActionBarClient = ({
    left = [
        {
            id: '',
            IconOrButton: <></>,
            text: ''
        }
    ],
    right = [
        {
            id: '',
            IconOrButton: <></>,
            text: ''
        }
    ]
}) => {
    return (
        <>
            <div className="">
                <div className='flex justify-between h-16 px-5 text-sm Be-Vietnam-Pro'>

                    <div className='flex flex-row items-center gap-7'>
                        {
                            left.map((ib) => <div key={ib.id} className='flex items-center gap-1'>
                                {ib?.IconOrButton}
                                {ib.text && <p>{ib.text}</p>}
                            </div>)
                        }
                    </div>

                    <div className='flex flex-row items-center gap-7'>
                        {
                            right.map((ib) => <div key={ib.id} className='flex items-center gap-1'>
                                {ib?.IconOrButton}
                                {ib.text && <p >{ib.text}</p>}
                            </div>)
                        }
                    </div>

                </div>
            </div>

        </>
    )
}