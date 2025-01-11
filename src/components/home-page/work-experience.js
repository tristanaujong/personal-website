function WorkExperience(props) {
    return (
        <div className="flex mb-6">
            <div class="container flex flex-row w-[1200px]">
                <div class="mr-4">
                    <img class="w-[50px] h-[50px]" src={props.image} alt="company_logo.png"/>
                </div>
                <div class="flex-col mr-4 w-3/4">
                    <h1 class="text-xl">
                        <span class="font-sfprodisplaybold">{props.company}</span>
                        <span class="font-sfpro">{props.location}</span>
                    </h1>
                    <h1 class="font-sfpro text-lg mb-2">
                        {props.title}
                    </h1>
                    <ul class="font-sfpro list-disc ml-5">
                        <li>{props.b1}</li>
                        <li>{props.b2}</li>
                        <li>{props.b3}</li>
                    </ul>
                </div>
                <div class="flex justify-end w-1/4">
                    <h1 class="font-sfprodisplaythin text-[22px]">
                        {props.dates}
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default WorkExperience;