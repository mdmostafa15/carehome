

export default function INputSrch(params) {
    const {lableFor, labelCont, iName, iPlaceholder, iValue, iType, iHandlerFun} = params;
    return (
        <div className="single-form">
            <label htmlFor={lableFor} > {labelCont} </label><br/>
            <input className="U-bg-clr-wb" name={iName} placeholder={iPlaceholder} type={iType} value= {iValue} onChange={iHandlerFun} /> 
        </div>
    )
}