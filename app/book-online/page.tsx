export default function IntakeForm(){
    return(
        <div className= " flex justify-center justify-content-center m-8">
            <form name= "Client Intake Form" data-netlify="true">
            <div className= 'form-contol flex-wrap gap 4'>
            <div className= "divider"> <div className = " prose font-medium">Request Your Appointment</div></div>
                <div>
                    <label>Fist Name</label>
                    <input type="text" placeholder="Jane" className="input input-bordered input-accent w-full max-w-xs m-2" />
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" placeholder="Doe" className="input input-bordered input-accent w-full max-w-xs m-2" />
                </div>
                <div>
                    <label>Phone</label>
                    <input type="text" placeholder="###-###-####" className="input input-bordered input-accent w-full max-w-xs m-2" />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" placeholder="Add answer here" className="input input-bordered input-accent w-full max-w-xs m-2" />
                </div>
                <div>
                    <label>Instagram handle</label>
                    <input type="text" placeholder="Add answer here" className="input input-bordered input-accent w-full max-w-xs m-2" />
                </div>
                <div>
                    <label>Pronouns</label>
                    <input type="text" placeholder="Add answer here" className="input input-bordered input-accent w-full max-w-xs m-2" />
                </div>

                <div>
                    <label>Budget Range</label>
                    <select className="select select-accent w-full max-w-xs m-2">
                        <option disabled selected>Choose</option>
                        <option>$150-$300</option>
                        <option>$300-$450</option>
                        <option>$450-$600</option>
                        <option>$600+</option>
                    </select>
                </div>
                <div>
                    <label>Date</label>
                    <input type="date" placeholder="Add answer here" className="input input-bordered input-accent w-full max-w-xs m-2" />
                </div>
                <div className="m-2">
                    <label>Upload any refrence files below</label>
                </div>
                <p>
                    <label>
                    <span className ="m-1">Add file:</span>
                    <input name="file" type="file"/>
                    </label>
                    <label className="label">
                        <span className="label-text-alt">Max size is 8MB</span>
                        
                    </label>
                </p>
             </div>
          </form>
        </div>
    );
};