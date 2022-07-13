function Generation ({ generation }) {
    return (
        <div className="Single-generation">
            <h4>
                {generation.gen_name} 
                <span>{generation.year_began} - {generation.year_end}</span>
            </h4>
        </div>
    )
}

export default Generation;