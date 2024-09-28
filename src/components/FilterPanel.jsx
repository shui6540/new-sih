import React, { useState, useEffect } from 'react';
import './FilterPanel.css';

const FilterPanel = () => {
    const initialFilters = {
        state: '',
        gender: '',
        age: '',
        caste: '',
        ministry: '',
        residence: '',
        minority: '',
        differentlyAbled: '',
        benefitType: '',
        dbtScheme: '',
        disabilityPercentage: '',
        belowPovertyLine: '',
        governmentEmployee: '',
        employmentStatus: '',
        student: '',
        occupation: '',
        applicationMode: '',
        schemeType: '',
        allGender: false,
        female: false,
        male: false,
        allCaste: false,
        sc: false,
        st: false,
        obc: false,
        general: false,
        both: false,
        rural: false,
        minorityNo: false,
        minorityYes: false,
        differentlyAbledNo: false,
        differentlyAbledYes: false,
        cash: false,
        inKind: false,
        composite: false,
        dbtSchemeNo: false,
        dbtSchemeYes: false,
        bplNo: false,
        bplYes: false,
        govEmployeeNo: false,
        govEmployeeYes: false,
        employed: false,
        unemployed: false,
        studentNo: false,
        studentYes: false
    };

    const [filters, setFilters] = useState(initialFilters);

    // Scroll to top when the component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []); // Empty dependency array ensures this runs only once when the component mounts

    const handleSelectChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    const handleCheckboxChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.checked });
    };

    const resetFilters = () => {
        setFilters(initialFilters);  // Reset to initial state
    };

    return (
        <div className="filter-panel">
            <h3>Filter By</h3>
            <button className="reset-filters" onClick={resetFilters}>Reset Filters</button>

            {/* State Filter */}
            <div className="filter-group">
                <label>State</label>
                <select name="state" value={filters.state} onChange={handleSelectChange}>
                    <option value="">Select</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
    <option value="Assam">Assam</option>
    <option value="Bihar">Bihar</option>
    <option value="Chhattisgarh">Chhattisgarh</option>
    <option value="Goa">Goa</option>
    <option value="Gujarat">Gujarat</option>
    <option value="Haryana">Haryana</option>
    <option value="Himachal Pradesh">Himachal Pradesh</option>
    <option value="Jharkhand">Jharkhand</option>
    <option value="Karnataka">Karnataka</option>
    <option value="Kerala">Kerala</option>
    <option value="Madhya Pradesh">Madhya Pradesh</option>
    <option value="Maharashtra">Maharashtra</option>
    <option value="Manipur">Manipur</option>
    <option value="Meghalaya">Meghalaya</option>
    <option value="Mizoram">Mizoram</option>
    <option value="Nagaland">Nagaland</option>
    <option value="Odisha">Odisha</option>
    <option value="Punjab">Punjab</option>
    <option value="Rajasthan">Rajasthan</option>
    <option value="Sikkim">Sikkim</option>
    <option value="Tamil Nadu">Tamil Nadu</option>
    <option value="Telangana">Telangana</option>
    <option value="Tripura">Tripura</option>
    <option value="Uttar Pradesh">Uttar Pradesh</option>
    <option value="Uttarakhand">Uttarakhand</option>
    <option value="West Bengal">West Bengal</option>
    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
    <option value="Chandigarh">Chandigarh</option>
    <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
    <option value="Lakshadweep">Lakshadweep</option>
    <option value="Delhi">Delhi</option>
    <option value="Puducherry">Puducherry</option>
    <option value="Ladakh">Ladakh</option>
    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                    {/* Add more states as per your requirement */}
                </select>
            </div>

            {/* Gender Filter */}
            <div className="filter-group">
                <label>Gender</label>
                <div className="checkbox-group">
                    <label><input type="checkbox" name="allGender" checked={filters.allGender} onChange={handleCheckboxChange} /> All </label>
                    <label><input type="checkbox" name="female" checked={filters.female} onChange={handleCheckboxChange} /> Female </label>
                    <label><input type="checkbox" name="male" checked={filters.male} onChange={handleCheckboxChange} /> Male </label>
                </div>
            </div>

            {/* Age Filter */}
            <div className="filter-group">
                <label>Age</label>
                <select name="age" value={filters.age} onChange={handleSelectChange}>
                    <option value="">Select</option>
                    <option value="age1">18-25</option>
                    <option value="age2">26-35</option>
                    <option value="age3">36-50</option>
                    <option value="age4">51+</option>
                </select>
            </div>

            {/* Caste Filter */}
            <div className="filter-group">
                <label>Caste</label>
                <div className="checkbox-group">
                    <label><input type="checkbox" name="allCaste" checked={filters.allCaste} onChange={handleCheckboxChange} /> All </label>
                    <label><input type="checkbox" name="sc" checked={filters.sc} onChange={handleCheckboxChange} /> Scheduled Caste (SC)</label>
                    <label><input type="checkbox" name="st" checked={filters.st} onChange={handleCheckboxChange} /> Scheduled Tribe (ST) </label>
                    <label><input type="checkbox" name="obc" checked={filters.obc} onChange={handleCheckboxChange} /> Other Backward Class (OBC) </label>
                    <label><input type="checkbox" name="general" checked={filters.general} onChange={handleCheckboxChange} /> General </label>
                </div>
            </div>

            {/* Ministry Filter */}
            <div className="filter-group">
                <label>Ministry Name</label>
                <select name="ministry" value={filters.ministry} onChange={handleSelectChange}>
                    <option value="">Select</option>
                    <option value="Comptroller And Auditor General Of India">Comptroller And Auditor General Of India</option>
    <option value="Ministry Of Agriculture And Farmers Welfare">Ministry Of Agriculture And Farmers Welfare</option>
    <option value="Ministry Of Chemicals And Fertilizers">Ministry Of Chemicals And Fertilizers</option>
    <option value="Ministry Of Commerce And Industry">Ministry Of Commerce And Industry</option>
    <option value="Ministry Of Communication">Ministry Of Communication</option>
    <option value="Ministry Of Consumer Affairs, Food And Public Distribution">Ministry Of Consumer Affairs, Food And Public Distribution</option>
    <option value="Ministry Of Corporate Affairs">Ministry Of Corporate Affairs</option>
    <option value="Ministry Of Culture">Ministry Of Culture</option>
    <option value="Ministry Of Defence">Ministry Of Defence</option>
    <option value="Ministry Of Development Of North Eastern Region">Ministry Of Development Of North Eastern Region</option>
    <option value="Ministry Of Earth Sciences">Ministry Of Earth Sciences</option>
    <option value="Ministry Of Education">Ministry Of Education</option>
    <option value="Ministry Of Electronics and Information Technology">Ministry Of Electronics and Information Technology</option>
    <option value="Ministry Of Environment, Forests And Climate Change">Ministry Of Environment, Forests And Climate Change</option>
    <option value="Ministry Of External Affairs">Ministry Of External Affairs</option>
    <option value="Ministry Of Finance">Ministry Of Finance</option>
    <option value="Ministry Of Fisheries, Animal Husbandry and Dairying">Ministry Of Fisheries, Animal Husbandry and Dairying</option>
    <option value="Ministry Of Food Processing Industries">Ministry Of Food Processing Industries</option>
    <option value="Ministry Of Health & Family Welfare">Ministry Of Health & Family Welfare</option>
    <option value="Ministry Of Heavy Industries">Ministry Of Heavy Industries</option>
    <option value="Ministry Of Home Affairs">Ministry Of Home Affairs</option>
    <option value="Ministry Of Housing & Urban Affairs">Ministry Of Housing & Urban Affairs</option>
    <option value="Ministry Of Information And Broadcasting">Ministry Of Information And Broadcasting</option>
    <option value="Ministry Of Jal Shakti">Ministry Of Jal Shakti</option>
    <option value="Ministry Of Labour And Employment">Ministry Of Labour And Employment</option>
    <option value="Ministry Of Law And Justice">Ministry Of Law And Justice</option>
    <option value="Ministry Of Micro, Small And Medium Enterprises">Ministry Of Micro, Small And Medium Enterprises</option>
    <option value="Ministry Of Minority Affairs">Ministry Of Minority Affairs</option>
    <option value="Ministry Of New And Renewable Energy">Ministry Of New And Renewable Energy</option>
    <option value="Ministry Of Panchayati Raj">Ministry Of Panchayati Raj</option>
    <option value="Ministry Of Personal, Public Grievances And Pensions">Ministry Of Personal, Public Grievances And Pensions</option>
    <option value="Ministry Of Petroleum And Natural Gas">Ministry Of Petroleum And Natural Gas</option>
    <option value="Ministry Of Ports, Shipping and Waterways">Ministry Of Ports, Shipping and Waterways</option>
    <option value="Ministry Of Railways">Ministry Of Railways</option>
    <option value="Ministry Of Road Transport & Highways">Ministry Of Road Transport & Highways</option>
    <option value="Ministry Of Rural Development">Ministry Of Rural Development</option>
    <option value="Ministry Of Science And Technology">Ministry Of Science And Technology</option>
    <option value="Ministry Of Skill Development And Entrepreneurship">Ministry Of Skill Development And Entrepreneurship</option>
    <option value="Ministry Of Social Justice And Empowerment">Ministry Of Social Justice And Empowerment</option>
    <option value="Ministry Of Statistics And Programme Implementation">Ministry Of Statistics And Programme Implementation</option>
    <option value="Ministry Of Textiles">Ministry Of Textiles</option>
    <option value="Ministry Of Tourism">Ministry Of Tourism</option>
    <option value="Ministry Of Tribal Affairs">Ministry Of Tribal Affairs</option>
    <option value="Ministry Of Women And Child Development">Ministry Of Women And Child Development</option>
    <option value="Ministry Of Youth Affairs & Sports">Ministry Of Youth Affairs & Sports</option>
    <option value="NITI Aayog">NITI Aayog</option>
    <option value="The Lokpal of India">The Lokpal of India</option>
                    {/* Add more ministries as per your requirement */}
                </select>
            </div>

            {/* Residence Filter */}
            <div className="filter-group">
                <label>Residence</label>
                <div className="checkbox-group">
                    <label><input type="checkbox" name="both" checked={filters.both} onChange={handleCheckboxChange} /> Both 
                    </label>
                    <label><input type="checkbox" name="rural" checked={filters.rural} onChange={handleCheckboxChange} /> Rural </label>
                </div>
            </div>

            {/* Minority Filter */}
            <div className="filter-group">
                <label>Minority</label>
                <div className="checkbox-group">
                    <label><input type="checkbox" name="minorityNo" checked={filters.minorityNo} onChange={handleCheckboxChange} /> No 
                    </label>
                    <label><input type="checkbox" name="minorityYes" checked={filters.minorityYes} onChange={handleCheckboxChange} /> Yes </label>
                </div>
            </div>

            {/* Differently Abled Filter */}
            <div className="filter-group">
                <label>Differently Abled</label>
                <div className="checkbox-group">
                    <label><input type="checkbox" name="differentlyAbledNo" checked={filters.differentlyAbledNo} onChange={handleCheckboxChange} /> No 
                    </label>
                    <label><input type="checkbox" name="differentlyAbledYes" checked={filters.differentlyAbledYes} onChange={handleCheckboxChange} /> Yes 
                    </label>
                </div>
            </div>

            {/* Benefit Type Filter */}
            <div className="filter-group">
                <label>Benefit Type</label>
                <div className="checkbox-group">
                    <label><input type="checkbox" name="cash" checked={filters.cash} onChange={handleCheckboxChange} /> Cash </label>
                    <label><input type="checkbox" name="inKind" checked={filters.inKind} onChange={handleCheckboxChange} /> In Kind </label>
                    <label><input type="checkbox" name="composite" checked={filters.composite} onChange={handleCheckboxChange} /> Composite </label>
                </div>
            </div>

            {/* DBT Scheme Filter */}
            <div className="filter-group">
                <label>DBT Scheme</label>
                <div className="checkbox-group">
                    <label><input type="checkbox" name="dbtSchemeNo" checked={filters.dbtSchemeNo} onChange={handleCheckboxChange} /> No 
                </label>
                    <label><input type="checkbox" name="dbtSchemeYes" checked={filters.dbtSchemeYes} onChange={handleCheckboxChange} /> Yes 
                    </label>
                </div>
            </div>

            {/* Disability Percentage Filter */}
            <div className="filter-group">
                <label>Disability Percentage</label>
                <select name="disabilityPercentage" value={filters.disabilityPercentage} onChange={handleSelectChange}>
                    <option value="">Select</option>
                    <option value="below40">Below 40%</option>
                    <option value="above40">40% and above</option>
                </select>
            </div>

            {/* Below Poverty Line Filter */}
            <div className="filter-group">
                <label>Below Poverty Line</label>
                <div className="checkbox-group">
                    <label><input type="checkbox" name="bplNo" checked={filters.bplNo} onChange={handleCheckboxChange} /> No 
                    </label>
                    <label><input type="checkbox" name="bplYes" checked={filters.bplYes} onChange={handleCheckboxChange} /> Yes 
                    </label>
                </div>
            </div>

            {/* Government Employee Filter */}
            <div className="filter-group">
                <label>Government Employee</label>
                <div className="checkbox-group">
                    <label><input type="checkbox" name="govEmployeeNo" checked={filters.govEmployeeNo} onChange={handleCheckboxChange} /> No 
                    </label>
                    <label><input type="checkbox" name="govEmployeeYes" checked={filters.govEmployeeYes} onChange={handleCheckboxChange} /> Yes 
                    </label>
                </div>
            </div>

            {/* Employment Status Filter */}
            <div className="filter-group">
                <label>Employment Status</label>
                <div className="checkbox-group">
                    <label><input type="checkbox" name="employed" checked={filters.employed} onChange={handleCheckboxChange} /> Employed 
                    </label>
                    <label><input type="checkbox" name="unemployed" checked={filters.unemployed} onChange={handleCheckboxChange} /> Unemployed 
                    </label>
                </div>
            </div>

            {/* Student Filter */}
            <div className="filter-group">
                <label>Student</label>
                <div className="checkbox-group">
                    <label><input type="checkbox" name="studentNo" checked={filters.studentNo} onChange={handleCheckboxChange} /> No 
                    </label>
                    <label><input type="checkbox" name="studentYes" checked={filters.studentYes} onChange={handleCheckboxChange} /> Yes 
                    </label>
                </div>
            </div>

           

            {/* Application Mode Filter */}
            <div className="filter-group">
                <label>Application Mode</label>
                <select name="applicationMode" value={filters.applicationMode} onChange={handleSelectChange}>
                    <option value="">Select</option>
                    <option value="online">Online</option>
                    <option value="offline">Offline</option>
                </select>
            </div>

            {/* Scheme Type Filter */}
            <div className="filter-group">
                <label>Scheme Type</label>
                <select name="schemeType" value={filters.schemeType} onChange={handleSelectChange}>
                    <option value="">Select</option>
                    <option value="type1">Central Sector</option>
                    <option value="type2">Centrally Sponsored</option>
                </select>
            </div>
        </div>
    );
};

export default FilterPanel;
