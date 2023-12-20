import React, { useState, useEffect } from "react";
import moment from 'moment';
import { Input, Form, Select, DatePicker, Upload, Button, Space, message, Tooltip } from 'antd';
import ModalLoading from '../../components/ModalLoading';
import ChildrenModal from '../../components/modal/ChildrenModal';
import MaintenanceModal from '../../components/modal/MaintenanceModal';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import SaveIcon from '@mui/icons-material/Save';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import CloseIcon from '@mui/icons-material/Close';
import { convertObjectToString, disabledDate } from '../../services/helperService';
import DeleteIcon from '@mui/icons-material/Delete';

export default function RegistrationForm({
    form,
    onFinish,
    onFinishFailed,
    prov,
    setProv,
    districtNumber,
    setDistrictNumber,
    addr,
    setAddr,
    brgy,
    setBrgy,
    memberType,
    setMemberType,
    idNumber,
    setIdNumber,
    sick,
    setSick,
    getAllBarangay,
    municipalities,
    getAddress,
    chosenBarangay,
    setChosenBarangay,
    dtFormat,
    birthChanged,
    gender,
    civilStatus,
    bloodType,
    religion,
    educations,
    employmentStatus,
    handleClassification,
    classification,
    uploadProps,
    handleIllness,
    formLoading,
    setFormLoading,
    saving,
    setShowModal,
    showModal,
    memberStatus,
    selectedItemForEdit,
    setSelectedItemForEdit,
    getMember,
    setMunicipality,
    formattedBday,
    setFormattedBday,
    reloadPage,
    illnessDefaultValues,
    setIllnessDefaultValues,
    formInitValues,
    setFormInitValues,
    saveDisabled,
    illnesses,
    companions,
    housings,
    educationArea,
    communityService,
    involvements,
    incomeSources,
    monthlyIncome,
    assets,
    socialProblems,
    economicProblems,
    healthIssues,
    getFullAddress,
    getStreet,
    offspring,
    setOffspring,
    medicines,
    setMedicines,
    showChildrenModal,
    setShowChildrenModal,
    showMedicineModal,
    setShowMedicineModal,
    handleSpecialization,
    handleServices,
    handleCompanion,
    handleInvolvement,
    handleSocialProblem,
    handleEconomicProblem,
    handleHealthIssue,
    handleIncomeSource,
    handleAssets,
    page,
    userArea,
    setUserArea,
    userService,
    setUserService,
    userHousing,
    setUserHousing,
    userCompanion,
    setUserCompanion,
    userInvolvement,
    setUserInvolvement,
    userSource,
    setUserSource,
    userAsset,
    setUserAsset,
    userSocial,
    setUserSocial,
    userEconomic,
    setUserEconomic,
    userHealth,
    setUserHealth
}) {
    const [editChildren, setEditChildren] = useState(false);
    const [editableId, setEditableId] = useState(null);
    const [maintenanceEdit, setMaintenanceEdit] = useState(false);
    const [editableMaintenanceId, setEditableMaintenanceId] = useState(null);
    const [deleting, setDeleting] = useState(false);
    const [deletingMaintenance, setDeletingMaintenance] = useState(false);
    const [childrenForm] = Form.useForm();
    const [maintenanceForm] = Form.useForm();

    const getEditableData = async (id) =>
    {
        try {
            setFormLoading(true);
            const { data } = await getMember({id, type: 'edit'});
            const user = data.user;
            let usrcls = user.classification;
            let usrsick = user.sickness;
            let bday = user.birth_date;
            let usrarea = user.area;
            let usrservice = user.service;
            let usrcompanion = user.companion;
            let usrinvolvement = user.activity;
            let usersoi = user.source_of_income;
            let usrasset = user.assets;
            let usrsocial = user.social_problem;
            let usreconomic = user.economic_problem;
            let usrhealth = user.health_issue;

            const childs = data.children;
            const maintenances = data.maintenances;
            setOffspring(childs);
            setMedicines(maintenances);

            if((usrcls) && (usrcls.indexOf(",") !== 0)) {
                usrcls = usrcls.split(",");
            }
            if((usrsick) && (usrsick.indexOf(",") !== 0)) {
                usrsick = usrsick.split(",");
            }
            if((usrarea) && (usrarea.indexOf(",") !== 0)) {
                usrarea = usrarea.split(",");
            }
            if((usrservice) && (usrservice.indexOf(",") !== 0)) {
                usrservice = usrservice.split(",");
            }
            if((usrcompanion) && (usrcompanion.indexOf(",") !== 0)) {
                usrcompanion = usrcompanion.split(",");
            }
            if((usrinvolvement) && (usrinvolvement.indexOf(",") !== 0)) {
                usrinvolvement = usrinvolvement.split(",");
            }
            if((usersoi) && (usersoi.indexOf(",") !== 0)) {
                usersoi = usersoi.split(",");
            }
            if((usrasset) && (usrasset.indexOf(",") !== 0)) {
                usrasset = usrasset.split(",");
            }
            if((usrsocial) && (usrsocial.indexOf(",") !== 0)) {
                usrsocial = usrsocial.split(",");
            }
            if((usreconomic) && (usreconomic.indexOf(",") !== 0)) {
                usreconomic = usreconomic.split(",");
            }
            if((usrhealth) && (usrhealth.indexOf(",") !== 0)) {
                usrhealth = usrhealth.split(",");
            }

            setSick(usrsick);
            setMemberType(usrcls);
            setUserArea(usrarea);
            setUserService(usrservice);
            setUserCompanion(usrcompanion);
            setUserInvolvement(usrinvolvement);
            setUserSource(usersoi);
            setUserAsset(usrasset);
            setUserSocial(usrsocial);
            setUserEconomic(usreconomic);
            setUserHealth(usrhealth);

            let fbday = null;
            if(bday) {
                bday = moment(bday, 'MM-DD-YYYY');
                fbday = moment(bday, 'YYYY-MM-DD');
                setFormattedBday(fbday);
            } else {
                bday = null;
            }

            form.setFieldsValue({
                specialization_area: user.area,
                user_services: user.service,
                user_companion: user.companion,
                user_involvement: user.activity,
                user_social_problem: user.social_problem,
                user_economic_problem: user.economic_problem,
                user_health_issue: user.health_issue,
                user_assets: user.assets,
                user_income_source: user.source_of_income,
                health_issue: usrhealth,
                economic_problem: usreconomic,
                social_problem: usrsocial,
                mother_first_name: user.mother_first_name,
                mother_middle_name: user.mother_middle_name,
                mother_last_name: user.mother_last_name,
                mother_extension_name: user.mother_extension_name,
                father_extension_name: user.father_extension_name,
                father_last_name: user.father_last_name,
                father_middle_name: user.father_middle_name,
                father_first_name: user.father_first_name,
                spouse_extension_name: user.spouse_extension_name,
                spouse_last_name: user.spouse_last_name,
                spouse_middle_name: user.spouse_middle_name,
                spouse_first_name: user.spouse_first_name,
                income_range: user.income_range,
                assets: usrasset,
                source_of_income: usersoi,
                involvement: usrinvolvement,
                housing: user.type,
                companion: usrcompanion,
                active_in_politics: user.active_in_politics,
                able_to_travel: user.able_to_travel,
                association_id: user.association_id,
                other_id: user.other_id,
                services: usrservice,
                area: usrarea,
                language: user.language,
                ethnic_origin: user.ethnic_origin,
                messenger: user.messenger,
                house_no: user.house_no,
                street: user.street,
                extension_name: user.extension_name,
                selected_illness: user.sickness,
                member_type: user.classification,
                formatted_bday: fbday,
                id_number: user.id_number,
                first_name: user.first_name,
                last_name: user.last_name,
                middle_name: user.middle_name,
                email: user.email,
                address: user.address,
                phone: user.phone,
                mobile: user.mobile,
                birth_date: bday,
                birth_place: user.birth_place,
                gender: user.gender,
                civil_status: user.civil_status,
                blood_type: user.blood_type,
                religion: user.religion,
                education: user.education,
                employment_status: user.employment_status,
                gsis: user.gsis,
                sss: user.sss,
                philhealth: user.philhealth,
                tin: user.tin,
                pension: user.pension,
                member_status: user.member_status,
                classification: usrcls,
                sickness: usrsick,
                contact_person: user.contact_person,
                contact_person_number: user.contact_person_number,
            });
            setFormLoading(false);
        } catch (error) {
            setFormLoading(false);
            message.error("Something went wrong");
        }
    }

    const clearForm = () =>
    {
        childrenForm.setFieldsValue({
            full_name: '',
            occupation: '',
            income: '',
            age: '',
            dependency: '',
        });
        maintenanceForm.setFieldsValue({
            medicine: '',
            dosage: '',
            quantity: '',
        });
    }

    const editMaintenance = (id) =>
    {
        setEditableMaintenanceId(id);
        setMaintenanceEdit(true);
        maintenanceForm.setFieldsValue({
            medicine: medicines[id].medicine,
            dosage: medicines[id].dosage,
            quantity: medicines[id].quantity,
        });
        setShowMedicineModal(true);
    }

    const editChild = (id) =>
    {
        setEditableId(id);
        setEditChildren(true);
        childrenForm.setFieldsValue({
            full_name: offspring[id].full_name,
            occupation: offspring[id].occupation,
            income: offspring[id].income,
            age: offspring[id].age,
            dependency: offspring[id].dependency,
        });
        setShowChildrenModal(true);
    }

    const deleteChild = (id) =>
    {
        let arr = offspring;
        delete arr[id];
        setDeleting(true);
        setTimeout(() => {
            setOffspring(arr);
            setDeleting(false);
        }, 500);
    }

    const addChildren = (event) =>
    {
        event.preventDefault();
        setShowChildrenModal(true);
    }

    const onAddChildFinish = (values) =>
    {
        if(editChildren)
        {
            offspring[editableId].full_name = values.full_name;
            offspring[editableId].occupation = values.occupation;
            offspring[editableId].income = values.income;
            offspring[editableId].age = values.age;
            offspring[editableId].dependency = values.dependency;
        } else
        {
            let arr = offspring;
            arr.push(values);
            setOffspring(arr);
        }
        setShowChildrenModal(false);
        setEditChildren(false);
        setEditableId(null);
        clearForm();
    }

    const addMaintenance = (event) =>
    {
        event.preventDefault();
        setShowMedicineModal(true);
    }

    const deleteMaintenance = (id) =>
    {
        let arr = medicines;
        delete arr[id];
        setDeletingMaintenance(true);
        setTimeout(() => {
            setMedicines(arr);
            setDeletingMaintenance(false);
        }, 500);
    }

    const onAddMedicineFinish = (values) =>
    {
        if(maintenanceEdit)
        {
            medicines[editableMaintenanceId].medicine = values.medicine;
            medicines[editableMaintenanceId].dosage = values.dosage;
            medicines[editableMaintenanceId].quantity = values.quantity;
        } else
        {
            let arr = medicines;
            arr.push(values);
            setMedicines(arr);
        }
        setShowMedicineModal(false);
        setMaintenanceEdit(false);
        setEditableMaintenanceId(null);
        clearForm();
    }

  useEffect(() => {
    if(page == "registration") {
        setFormInitValues({
            province: prov,
        });
        form.setFieldsValue({
            province: prov,
        });
    } else {
        setFormInitValues({
            specialization_area: userArea,
            user_services: userService,
            user_companion: userCompanion,
            user_involvement: userInvolvement,
            user_social_problem: userSocial,
            user_economic_problem: userEconomic,
            user_health_issue: userHealth,
            user_assets: userAsset,
            user_income_source: userSource,
            province: prov,
            district_no: districtNumber,
            municipality_name: addr,
            barangay_name: brgy,
            member_type: memberType,
            id_number: idNumber,
            selected_illness: sick,
            formatted_bday: formattedBday,
        });
        form.setFieldsValue({
            specialization_area: userArea,
            user_services: userService,
            user_companion: userCompanion,
            user_involvement: userInvolvement,
            user_social_problem: userSocial,
            user_economic_problem: userEconomic,
            user_health_issue: userHealth,
            user_assets: userAsset,
            user_income_source: userSource,
            province: prov,
            district_no: districtNumber,
            municipality_name: addr,
            barangay_name: brgy,
            member_type: memberType,
            id_number: idNumber,
            selected_illness: sick,
            formatted_bday: formattedBday,
        });
        if(selectedItemForEdit)  {
            setFormInitValues({});
            getEditableData(selectedItemForEdit);
        }
    }
  }, []);
  return (
    <>
        {(formLoading) && (
            <ModalLoading
                message="Loading, please wait ..."
                pcolor="bg-yellow-500"
            />
        )}
        {(saving) && (
            <ModalLoading
                message="Saving, please wait ..."
                pcolor="bg-green-500"
            />
        )}
	{(deleting) && (
            <ModalLoading
                message="Deleting child, please wait ..."
                pcolor="bg-red-500"
            />
        )}
        {(deletingMaintenance) && (
            <ModalLoading
                message="Deleting maintenance, please wait ..."
                pcolor="bg-red-500"
            />
        )}

    <ChildrenModal
        childrenForm={childrenForm}
        showChildrenModal={showChildrenModal}
        setShowChildrenModal={setShowChildrenModal}
        onAddChildFinish={onAddChildFinish}
        editChildren={editChildren}
        clearForm={clearForm}
        EditRoundedIcon={EditRoundedIcon}
    />
    <MaintenanceModal
        maintenanceForm={maintenanceForm}
        showMedicineModal={showMedicineModal}
        setShowMedicineModal={setShowMedicineModal}
        onAddMedicineFinish={onAddMedicineFinish}
        maintenanceEdit={maintenanceEdit}
        clearForm={clearForm}
        EditRoundedIcon={EditRoundedIcon}
    />
    <Form
        layout="vertical"
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        initialValues={formInitValues}
    >
        <div className="flex flex-wrap justify-left items-center mt-5 uppercase">
                { (page === 'add' || page === 'registration') && (
                    <>
                        <Form.Item name="id_number">
                            <Input type="hidden" id="id_number" value="" />
                        </Form.Item>
                        <Form.Item name="barangay_name">
                            <Input type="hidden" id="barangay_name" value="" />
                        </Form.Item>
                        <Form.Item name="municipality_name">
                            <Input type="hidden" id="municipality_name" value="" />
                        </Form.Item>
                        <Form.Item name="district_no">
                            <Input type="hidden" id="district_no" value="" />
                        </Form.Item>
                    </>
                )}
                <Form.Item name="user_income_source">
                    <Input type="hidden" id="user_income_source" value="" />
                </Form.Item>
                <Form.Item name="user_assets">
                    <Input type="hidden" id="user_assets" value="" />
                </Form.Item>
                <Form.Item name="user_health_issue">
                    <Input type="hidden" id="user_health_issue" value="" />
                </Form.Item>
                <Form.Item name="user_economic_problem">
                    <Input type="hidden" id="user_economic_problem" value="" />
                </Form.Item>
                <Form.Item name="user_social_problem">
                    <Input type="hidden" id="user_social_problem" value="" />
                </Form.Item>
                <Form.Item name="user_involvement">
                    <Input type="hidden" id="user_involvement" value="" />
                </Form.Item>
                <Form.Item name="user_companion">
                    <Input type="hidden" id="user_companion" value="" />
                </Form.Item>
                <Form.Item name="user_services">
                    <Input type="hidden" id="user_services" value="" />
                </Form.Item>
                <Form.Item name="specialization_area">
                    <Input type="hidden" id="specialization_area" value="" />
                </Form.Item>
                <Form.Item name="member_type">
                    <Input type="hidden" id="member_type" value="" />
                </Form.Item>
                <Form.Item name="selected_illness">
                    <Input type="hidden" id="selected_illness" value="" />
                </Form.Item>
                <Form.Item name="formatted_bday">
                    <Input type="hidden" id="formatted_bday" value="" />
                </Form.Item>
                { page === 'edit' && (
                    <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                        <Form.Item label="ID Number" name="id_number" rules={[{ required: false }]}>
                            <Input style={{ width: '270px', backgroundColor: '#e6b82c' }} size="large" className="uppercase" readOnly={true} />
                        </Form.Item>
                    </div>
                )}
                { (page === 'add' || page === 'registration') && (
                <>
                    <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                        <Form.Item label="Region" name="region" rules={[{ required: false }]}>
                            <Input style={{ width: '270px' }} size="large" className="uppercase" placeholder="Region here ..." readOnly={true} />
                        </Form.Item>
                    </div>
                    <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                        <Form.Item label="Province" name="province" rules={[{ required: false }]}>
                            <Input style={{ width: '270px' }} size="large" className="uppercase" readOnly={true} />
                        </Form.Item>
                    </div>
                    <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                        <Form.Item label="Municipality" name="municipality" rules={[{ required: true, message: 'Municipality is required.' }]}>
                            <Select
                                className="uppercase"
                                placeholder="Select a municipality here ..."
                                style={{ width: '270px' }}
                                size="large"
                                onChange={getAllBarangay}>
                                {" "}
                                {municipalities && municipalities.map((item, index) => <Select.Option value={item.municipality_code_number} key={index}>{item.municipality_name}</Select.Option>)}
                              </Select>
                        </Form.Item>
                    </div>
                    <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                        <Form.Item label="Barangay" name="barangay" rules={[{ required: true, message: 'Barangay is required.' }]}>
                            <Select
                                className="uppercase"
                                placeholder="Select a barangay here ..."
                                style={{ width: '270px' }}
                                size="large"
                                onChange={getAddress}>
                                {" "}
                                {chosenBarangay && chosenBarangay.map((item, index) => <Select.Option className="uppercase" value={item.id} key={index}>{item.barangay_name}</Select.Option>)}
                              </Select>
                        </Form.Item>
                    </div>
                </>
                )}
                <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                    <Form.Item label="First Name" name="first_name" rules={[{ required: true, message: 'First Name is required.' }]}>
                        <Input style={{ width: '270px' }} size="large" className="uppercase" placeholder="Type your first name here ..." />
                    </Form.Item>
                </div>
                <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                    <Form.Item label="Middle Name" name="middle_name" rules={[{ required: false }]}>
                        <Input style={{ width: '270px' }} size="large" className="uppercase" placeholder="Type your middle name here ..." />
                    </Form.Item>
                </div>
                <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                    <Form.Item label="Last Name" name="last_name" rules={[{ required: true, message: 'Last Name is required.' }]}>
                        <Input style={{ width: '270px' }} size="large" className="uppercase" placeholder="Type your last name here ..." />
                    </Form.Item>
                </div>
                <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                    <Form.Item label="Extension (Jr,Sr)" name="extension_name" rules={[{ required: false }]}>
                        <Input style={{ width: '270px' }} size="large" className="uppercase" placeholder="Type your extension name here ..." />
                    </Form.Item>
                </div>
                <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                    <Form.Item label="House No./Zone/Purok/Sitio" name="house_no" rules={[{ required: false }]}>
                        <Input onChange={getFullAddress} style={{ width: '270px' }} size="large" className="uppercase" placeholder="Type your house no./zone/purok/sitio here ..." />
                    </Form.Item>
                </div>
                <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                    <Form.Item label="Street" name="street" rules={[{ required: false }]}>
                        <Input onChange={getStreet} style={{ width: '270px' }} size="large" className="uppercase" placeholder="Type your street here ..." />
                    </Form.Item>
                </div>
                <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                    <Form.Item label="Address" name="address" rules={[{ required: true, message: 'Address is required.' }]}>
                        <Input style={{ width: '270px' }} size="large" className="uppercase" placeholder="Type your address here ..." />
                    </Form.Item>
                </div>
                <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                    <Form.Item label="E-mail Address" name="email" rules={[
                        { required: false },
                        { type: 'email', message: 'Invalid email address.' }
                        ]}>
                        <Input style={{ width: '270px' }} size="large" className="uppercase" placeholder="Type your email address here ..." />
                    </Form.Item>
                </div>
                <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                    <Form.Item label="Telephone" name="phone" rules={[{ required: false }]}>
                        <Input style={{ width: '270px' }} size="large" className="uppercase" placeholder="Type your landline number here ..." />
                    </Form.Item>
                </div>
                <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                    <Form.Item label="Mobile No." name="mobile" rules={[{ required: true, message: 'Mobile number is required.' }]}>
                        <Input style={{ width: '270px' }} size="large" className="uppercase" placeholder="Type your mobile number here ..." />
                    </Form.Item>
                </div>
                <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                    <Form.Item label="Messenger" name="messenger" rules={[{ required: false }]}>
                        <Input style={{ width: '270px' }} size="large" className="uppercase" placeholder="Type your messenger here ..." />
                    </Form.Item>
                </div>
                <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                    <Form.Item label="Birthdate (mm-dd-yyyy)" name="birth_date" rules={[{ required: true, message: 'Birthdate is required.' }]}>
                        <DatePicker
                        format={dtFormat}
                        style={{ width: '270px' }}
                        size="large"
                        className="uppercase"
	  		disabledDate={disabledDate}
                        onChange={birthChanged}
                        placeholder="Pick a date here ..." />
                    </Form.Item>
                </div>
                <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                    <Form.Item label="Place of Birth" name="birth_place" rules={[{ required: true, message: 'Place of birth is required.' }]}>
                        <Input style={{ width: '270px' }} size="large" className="uppercase" placeholder="Type your birth place here ..." />
                    </Form.Item>
                </div>
                <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                    <Form.Item label="Sex " name="gender" rules={[{ required: true, message: 'Gender is required.' }]}>
                        <Select
                        className="uppercase"
                        placeholder="Select a gender here"
                        style={{ width: '270px' }}
                        size="large">
                            {" "}
                            {gender && gender.map((item, index) => <Select.Option className="uppercase" value={item.type} key={index}>{item.type}</Select.Option>)}
                          </Select>
                    </Form.Item>
                </div>
                <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                    <Form.Item label="Civil Status " name="civil_status" rules={[{ required: true, message: 'Civil Status is required.' }]}>
                        <Select
                        className="uppercase"
                        placeholder="Select a civil status here"
                        style={{ width: '270px' }}
                        size="large">
                            {" "}
                            {civilStatus && civilStatus.map((item, index) => <Select.Option className="uppercase" value={item.status} key={index}>{item.status}</Select.Option>)}
                          </Select>
                    </Form.Item>
                </div>
                <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                    <Form.Item label="Blood Type" name="blood_type" rules={[{ required: true, message: 'Blood type is required.' }]}>
                        <Select
                        className="uppercase"
                        placeholder="Select a blood type here"
                        style={{ width: '270px' }} size="large">
                            {" "}
                            {bloodType && bloodType.map((item, index) => <Select.Option className="uppercase" value={item.type} key={index}>{item.type}</Select.Option>)}
                          </Select>
                    </Form.Item>
                </div>
                <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                    <Form.Item label="Religion" name="religion" rules={[{ required: true, message: 'Religion is required.' }]}>
                        <Select
                        className="uppercase"
                        placeholder="Select a religion here"
                        style={{ width: '270px' }} size="large">
                            {" "}
                            {religion && religion.map((item, index) => <Select.Option className="uppercase" value={item.name} key={index}>{item.name}</Select.Option>)}
                          </Select>
                    </Form.Item>
                </div>
                <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                    <Form.Item label="Ethnic Origin" name="ethnic_origin" rules={[{ required: false }]}>
                        <Input style={{ width: '270px' }} size="large" className="uppercase" placeholder="Type your ethnic origin here ..." />
                    </Form.Item>
                </div>
                <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                    <Form.Item label="Language Spoken/Written" name="language" rules={[{ required: false }]}>
                        <Input style={{ width: '270px' }} size="large" className="uppercase" placeholder="Type your language spoken/written here ..." />
                    </Form.Item>
                </div>
                <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                    <Form.Item label="Highest Educational Attainment" name="education" rules={[{ required: true, message: 'Educational attainment is required.' }]}>
                        <Select
                        className="uppercase"
                        placeholder="Select education here"
                        style={{ width: '270px' }} size="large">
                            {" "}
                            {educations && educations.map((item, index) => <Select.Option className="uppercase" value={item.level} key={index}>{item.level}</Select.Option>)}
                          </Select>
                    </Form.Item>
                </div>
                <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                    <Form.Item label="Area of Specialization" name="area" rules={[{ required: false }]}>
                        <Select
                            className="uppercase"
                            onChange={handleSpecialization}
                            placeholder="Select all applicable"
                            style={{ width: '270px' }}
                            labelInValue
                            mode="multiple"
                            size="large"
                            tokenSeparators={[","]}
                        >
                            {" "}
                            {educationArea && educationArea.map((item, index) => <Select.Option className="uppercase" value={item.area} key={index}>{item.area}</Select.Option>)}
                          </Select>
                    </Form.Item>
                </div>
                <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                    <Form.Item label="Community Service/Others" name="services" rules={[{ required: false }]}>
                        <Select
                            className="uppercase"
                            onChange={handleServices}
                            placeholder="Select all applicable"
                            style={{ width: '270px' }}
                            labelInValue
                            mode="multiple"
                            size="large"
                            tokenSeparators={[","]}
                        >
                            {" "}
                            {communityService && communityService.map((item, index) => <Select.Option className="uppercase" value={item.service} key={index}>{item.service}</Select.Option>)}
                          </Select>
                    </Form.Item>
                </div>
                <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                    <Form.Item label="GSIS" name="gsis" rules={[{ required: false }]}>
                        <Input style={{ width: '270px' }} size="large" className="uppercase" placeholder="Type your GSIS ID number here ..." />
                    </Form.Item>
                </div>
                <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                    <Form.Item label="SSS" name="sss" rules={[{ required: false }]}>
                        <Input style={{ width: '270px' }} size="large" className="uppercase" placeholder="Type your SSS ID number here ..." />
                    </Form.Item>
                </div>
                <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                    <Form.Item label="TIN" name="tin" rules={[{ required: false }]}>
                        <Input style={{ width: '270px' }} size="large" className="uppercase" placeholder="Type your TIN ID number here ..." />
                    </Form.Item>
                </div>
                <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                    <Form.Item label="PhilHealth" name="philhealth" rules={[{ required: false }]}>
                        <Input style={{ width: '270px' }} size="large" className="uppercase" placeholder="Type your PhilHealth ID number here ..." />
                    </Form.Item>
                </div>
                <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                    <Form.Item label="SC Association / Org ID No." name="association_id" rules={[{ required: false }]}>
                        <Input style={{ width: '270px' }} size="large" className="uppercase" placeholder="Type your SC Association/Org ID No. here ..." />
                    </Form.Item>
                </div>
                <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                    <Form.Item label="Other ID (please specify)" name="other_id" rules={[{ required: false }]}>
                        <Input style={{ width: '270px' }} size="large" className="uppercase" placeholder="Type your other ID here ..." />
                    </Form.Item>
                </div>
                <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                    <Form.Item label="Employment Status" name="employment_status" rules={[{ required: true, message: 'Employment status is required.' }]}>
                        <Select
                        className="uppercase"
                        placeholder="Select employment status here"
                        style={{ width: '270px' }} size="large">
                            {" "}
                            {employmentStatus && employmentStatus.map((item, index) => <Select.Option className="uppercase" value={item.status} key={index}>{item.status}</Select.Option>)}
                          </Select>
                    </Form.Item>
                </div>
                <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                    <Form.Item label="Classification" name="classification" rules={[{ required: true, message: 'Classification is required.' }]}>
                        <Select
                            className="uppercase"
                            onChange={handleClassification}
                            placeholder="Select a classification here"
                            style={{ width: '270px' }}
                            labelInValue
                            mode="multiple"
                            size="large"
                            tokenSeparators={[","]}
                        >
                            {" "}
                            {classification && classification.map((item, index) => <Select.Option className="uppercase" value={item.type} key={index}>{item.type}</Select.Option>)}
                          </Select>
                    </Form.Item>
                </div>
                <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                    <Form.Item label="Capability to travel" name="able_to_travel" rules={[{ required: true, message: 'Capability to travel is required.' }]}>
                        <Select
                            className="uppercase"
                            placeholder="Select an option here"
                            style={{ width: '270px' }}
                            size="large"
                        >
                            {" "}
                          <Select.Option className="uppercase" value={'yes'}>{'yes'}</Select.Option>
                          <Select.Option className="uppercase" value={'no'}>{'no'}</Select.Option>
                        </Select>
                    </Form.Item>
                </div>
                <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                    <Form.Item label="Active in Politics" name="active_in_politics" rules={[{ required: true, message: 'Active in Politics is required.' }]}>
                        <Select
                            className="uppercase"
                            placeholder="Select an option here"
                            style={{ width: '270px' }}
                            size="large"
                        >
                            {" "}
                          <Select.Option className="uppercase" value={'yes'}>{'yes'}</Select.Option>
                          <Select.Option className="uppercase" value={'no'}>{'no'}</Select.Option>
                        </Select>
                    </Form.Item>
                </div>
                <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                    <Form.Item label="Monthly Pension" name="pension" rules={[{ required: false }]}>
                        <Input style={{ width: '270px' }} size="large" className="uppercase" placeholder="Type your monthly pension here ..." />
                    </Form.Item>
                </div>

                { (page === 'add' || page === 'edit') && (
                    <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                        <Form.Item label="Member Status" name="member_status" rules={[{ required: true, message: 'Member Status is required.' }]}>
                            <Select
                            className="uppercase"
                            placeholder="Select member status here"
                            style={{ width: '270px' }} size="large">
                                {" "}
                                {memberStatus && memberStatus.map((item, index) => <Select.Option className="uppercase" value={item.status} key={index}>{item.status}</Select.Option>)}
                              </Select>
                        </Form.Item>
                    </div>
                )}

                <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                    <Form.Item label="In case of Emergency" name="contact_person" rules={[{ required: true, message: 'Contact person is required.' }]}>
                        <Input style={{ width: '270px' }} size="large" className="uppercase" placeholder="Type your contact person here ..." />
                    </Form.Item>
                </div>
                <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                    <Form.Item label="Contact Number" name="contact_person_number" rules={[{ required: true, message: 'Emergency contact number is required.' }]}>
                        <Input style={{ width: '270px' }} size="large" className="uppercase" placeholder="Type the contact number of contact person here ..." />
                    </Form.Item>
                </div>
                <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                    <Form.Item label="Living/Residing with" name="companion" rules={[{ required: false }]}>
                        <Select
                            className="uppercase"
                            onChange={handleCompanion}
                            placeholder="Select all applicable"
                            style={{ width: '270px' }}
                            labelInValue
                            mode="multiple"
                            size="large"
                            tokenSeparators={[","]}
                        >
                            {" "}
                            {companions && companions.map((item, index) => <Select.Option className="uppercase" value={item.companion} key={index}>{item.companion}</Select.Option>)}
                          </Select>
                    </Form.Item>
                </div>
                <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                    <Form.Item label="Housing" name="housing" rules={[{ required: false }]}>
                        <Select
                            className="uppercase"
                            placeholder="Select housing type"
                            style={{ width: '270px' }}
                            size="large"
                        >
                            {" "}
                            {housings && housings.map((item, index) => <Select.Option className="uppercase" value={item.type} key={index}>{item.type}</Select.Option>)}
                          </Select>
                    </Form.Item>
                </div>
                <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                    <Form.Item label="Involvement in Community" name="involvement" rules={[{ required: false }]}>
                        <Select
                            className="uppercase"
                            onChange={handleInvolvement}
                            placeholder="Select all applicable"
                            style={{ width: '270px' }}
                            labelInValue
                            mode="multiple"
                            size="large"
                            tokenSeparators={[","]}
                        >
                            {" "}
                            {involvements && involvements.map((item, index) => <Select.Option className="uppercase" value={item.field} key={index}>{item.field}</Select.Option>)}
                          </Select>
                    </Form.Item>
                </div>
                { (page === 'add' || page === 'registration') && (
                    <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                            <Upload {...uploadProps}>
                                <Button
                                    size="large"
                                    className="uppercase"
                                    style={{ width: '270px' }}
                                    icon={<FileUploadIcon />}
                                    >Click To Upload a Valid ID</Button>
                            </Upload>

                    </div>
                )}
	  	<div className="w-full flex bg-secondary justify-center items-center py-2 gap-4">
                    <h1 className="uppercase font-bold text-base text-white pt-2">- - - - Family Composition - - - -</h1>
                </div>
                <div className="w-full flex flex-wrap justify-left items-center">
                     <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                        <Form.Item label="Spouse's First Name" name="spouse_first_name" rules={[{ required: false }]}>
                            <Input style={{ width: '270px' }} size="large" className="uppercase" placeholder="Type your Spouse's First Name here ..." />
                        </Form.Item>
                    </div>
                    <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                        <Form.Item label="Spouse's Middle Name" name="spouse_middle_name" rules={[{ required: false }]}>
                            <Input style={{ width: '270px' }} size="large" className="uppercase" placeholder="Type your Spouse's Middle Name here ..." />
                        </Form.Item>
                    </div>
                    <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                        <Form.Item label="Spouse's Last Name" name="spouse_last_name" rules={[{ required: false }]}>
                            <Input style={{ width: '270px' }} size="large" className="uppercase" placeholder="Type your Spouse's Last Name here ..." />
                        </Form.Item>
                    </div>
                    <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                        <Form.Item label="Spouse's Extension (Jr,Sr)" name="spouse_extension_name" rules={[{ required: false }]}>
                            <Input style={{ width: '270px' }} size="large" className="uppercase" placeholder="Type your Spouse's Extension Name here ..." />
                        </Form.Item>
                    </div>

                    <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                        <Form.Item label="Father's First Name" name="father_first_name" rules={[{ required: false }]}>
                            <Input style={{ width: '270px' }} size="large" className="uppercase" placeholder="Type your Father's First Name here ..." />
                        </Form.Item>
                    </div>
                    <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                        <Form.Item label="Father's Middle Name" name="father_middle_name" rules={[{ required: false }]}>
                            <Input style={{ width: '270px' }} size="large" className="uppercase" placeholder="Type your Father's Middle Name here ..." />
                        </Form.Item>
                    </div>
                    <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                        <Form.Item label="Father's Last Name" name="father_last_name" rules={[{ required: false }]}>
                            <Input style={{ width: '270px' }} size="large" className="uppercase" placeholder="Type your Father's Last Name here ..." />
                        </Form.Item>
                    </div>
                    <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                        <Form.Item label="Father's Extension (Jr,Sr)" name="father_extension_name" rules={[{ required: false }]}>
                            <Input style={{ width: '270px' }} size="large" className="uppercase" placeholder="Type your Father's Extension Name here ..." />
                        </Form.Item>
                    </div>

                    <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                        <Form.Item label="Mother's First Name" name="mother_first_name" rules={[{ required: false }]}>
                            <Input style={{ width: '270px' }} size="large" className="uppercase" placeholder="Type your Mother's First Name here ..." />
                        </Form.Item>
                    </div>
                    <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                        <Form.Item label="Mother's Maiden Middle Name" name="mother_middle_name" rules={[{ required: false }]}>
                            <Input style={{ width: '270px' }} size="large" className="uppercase" placeholder="Type your Mother's Middle Name here ..." />
                        </Form.Item>
                    </div>
                    <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                        <Form.Item label="Mother's Maiden Last Name" name="mother_last_name" rules={[{ required: false }]}>
                            <Input style={{ width: '270px' }} size="large" className="uppercase" placeholder="Type your Mother's Last Name here ..." />
                        </Form.Item>
                    </div>
                    <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                        <Form.Item label="Mother's Extension (Jr,Sr)" name="mother_extension_name" rules={[{ required: false }]}>
                            <Input style={{ width: '270px' }} size="large" className="uppercase" placeholder="Type your Mother's Extension Name here ..." />
                        </Form.Item>
                    </div>

                        <table className="w-near-full ml-3">
                            <thead className="bg-white border">
                                <tr>
                                    <th colspan="5" className="border text-center font-small text-gray-900 px-1 py-1 text-left text-lg">List of Children&nbsp;&nbsp;
                        <Tooltip title="Click to add a child" placement="top">
                            <AddCircleOutlineIcon onClick={addChildren} className="cursor-pointer text-green-600" />
                        </Tooltip>
                                    </th>
                                </tr>
                                <tr>
                                    <th className="border text-base text-center font-small text-gray-900 px-1 py-1 text-left">Full Name
                                    </th>
                                    <th className="border text-base text-center font-small text-gray-900 px-1 py-1 text-left">Occupation
                                    </th>
                                    <th className="border text-base text-center font-small text-gray-900 px-1 py-1 text-left">Income
                                    </th>
                                    <th className="border text-base text-center font-small text-gray-900 px-1 py-1 text-left">Age
                                    </th>
                                    <th className="border text-base text-center font-small text-gray-900 px-1 py-1 text-left">Dependency
                                    </th>
                                    <th className="border text-base text-center font-small text-gray-900 px-1 py-1 text-left">Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                { offspring && offspring.map((item, index) => (
                                     <>
                                        <tr className="border" key={index}>
                                            <td className="border p-2 whitespace-nowrap text-center text-sm font-semibold text-black">{ item.full_name }
                                            </td>
                                            <td className="border p-2 whitespace-nowrap text-center text-sm font-semibold text-black">{ item.occupation }
                                            </td>
                                            <td className="border p-2 whitespace-nowrap text-center text-sm font-semibold text-black">{ item.income }
                                            </td>
                                            <td className="border p-2 whitespace-nowrap text-center text-sm font-semibold text-black">{ item.age }
                                            </td>
                                            <td className="border p-2 whitespace-nowrap text-center text-sm font-semibold text-black">{ item.dependency }
                                            </td>
                                            <td className="border p-2 whitespace-nowrap text-center text-sm font-semibold text-black">
                                                <Space>
						<Tooltip title="Click to edit this child" placement="top">
                                                    <EditRoundedIcon onClick={() => editChild(index)} className="rounded-none border-2 border-gray-700 cursor-pointer" />
                                                </Tooltip>
						<Tooltip title="Click to delete this child" placement="top">
                                                    <DeleteIcon onClick={() => deleteChild(index)} className="rounded-none border-2 border-gray-700 cursor-pointer" />
                                                </Tooltip>
                                                </Space>
                                            </td>
                                        </tr>
                                     </>
                                    )
                                )}
                            </tbody>
                        </table>

                </div>
                <div className="w-full flex bg-white justify-center items-center py-2 gap-4 text-white">
                    &nbsp;
                </div>
                <div className="w-full flex bg-secondary justify-center items-center py-2 gap-4">
                    <h1 className="uppercase font-bold text-base text-white pt-2">- - - - Economic Profile - - - -</h1>
                </div>
                <div className="w-full flex flex-wrap justify-left items-center">
                    <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                        <Form.Item label="Source of Income and Assistance" name="source_of_income" rules={[{ required: false }]}>
                            <Select
                                className="uppercase"
                                onChange={handleIncomeSource}
                                placeholder="Select all applicable"
                                style={{ width: '270px' }}
                                labelInValue
                                mode="multiple"
                                size="large"
                                tokenSeparators={[","]}
                            >
                                {" "}
                                {incomeSources && incomeSources.map((item, index) => <Select.Option className="uppercase" value={item.source} key={index}>{item.source}</Select.Option>)}
                              </Select>
                        </Form.Item>
                    </div>
                    <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                        <Form.Item label="Assets and Properties" name="assets" rules={[{ required: false }]}>
                            <Select
                                className="uppercase"
                                onChange={handleAssets}
                                placeholder="Select all applicable"
                                style={{ width: '270px' }}
                                labelInValue
                                mode="multiple"
                                size="large"
                                tokenSeparators={[","]}
                            >
                                {" "}
                                {assets && assets.map((item, index) => <Select.Option className="uppercase" value={item.type} key={index}>{item.type}</Select.Option>)}
                              </Select>
                        </Form.Item>
                    </div>
                    <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                        <Form.Item label="Monthly Income (in Php)" name="income_range" rules={[{ required: false }]}>
                            <Select
                                className="uppercase"
                                placeholder="Select Monthly Income"
                                style={{ width: '270px' }}
                                size="large"
                            >
                                {" "}
                                {monthlyIncome && monthlyIncome.map((item, index) => <Select.Option className="uppercase" value={item.range} key={index}>{item.range}</Select.Option>)}
                              </Select>
                        </Form.Item>
                    </div>
                </div>
                <div className="w-full flex bg-secondary justify-center items-center py-2">
                    <h1 className="uppercase font-bold text-base text-white pt-2">- - - - Health Profile - - - -</h1>
                </div>
                <div className="w-full flex flex-wrap justify-left items-center">
                    <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                        <Form.Item label="Social Problems/Needs" name="social_problem" rules={[{ required: false }]}>
                            <Select
                                className="uppercase"
                                onChange={handleSocialProblem}
                                placeholder="Select all applicable"
                                style={{ width: '270px' }}
                                labelInValue
                                mode="multiple"
                                size="large"
                                tokenSeparators={[","]}
                            >
                                {" "}
                                {socialProblems && socialProblems.map((item, index) => <Select.Option className="uppercase" value={item.problem} key={index}>{item.problem}</Select.Option>)}
                              </Select>
                        </Form.Item>
                    </div>
                    <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                        <Form.Item label="Economic Problems/Needs" name="economic_problem" rules={[{ required: false }]}>
                            <Select
                                className="uppercase"
                                onChange={handleEconomicProblem}
                                placeholder="Select all applicable"
                                style={{ width: '270px' }}
                                labelInValue
                                mode="multiple"
                                size="large"
                                tokenSeparators={[","]}
                            >
                                {" "}
                                {economicProblems && economicProblems.map((item, index) => <Select.Option className="uppercase" value={item.problem} key={index}>{item.problem}</Select.Option>)}
                              </Select>
                        </Form.Item>
                    </div>
                    <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                        <Form.Item label="Health Issues" name="health_issue" rules={[{ required: false }]}>
                            <Select
                                className="uppercase"
                                onChange={handleHealthIssue}
                                placeholder="Select all applicable"
                                style={{ width: '270px' }}
                                labelInValue
                                mode="multiple"
                                size="large"
                                tokenSeparators={[","]}
                            >
                                {" "}
                                {healthIssues && healthIssues.map((item, index) => <Select.Option className="uppercase" value={item.problem} key={index}>{item.problem}</Select.Option>)}
                              </Select>
                        </Form.Item>
                    </div>
                    <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                        <Form.Item label="Common Illness and Sickness" name="sickness" rules={[{ required: false }]}>
                            <Select
                                className="uppercase"
                                onChange={handleIllness}
                                placeholder="Select all applicable"
                                style={{ width: '270px' }}
                                labelInValue
                                mode="multiple"
                                size="large"
                                tokenSeparators={[","]}
                            >
                                {" "}
                                {illnesses && illnesses.map((item, index) => <Select.Option className="uppercase" value={item.name} key={index}>{item.name}</Select.Option>)}
                              </Select>
                        </Form.Item>
                    </div>

                    <table className="w-near-full ml-3">
                            <thead className="bg-white border">
                                <tr>
                                    <th colspan="3" className="border text-lg text-center font-small text-gray-900 px-1 py-1 text-left">List of Medicines for Maintenance&nbsp;&nbsp;
                        <Tooltip title="Click to add a maintenance medicine" placement="top">
                            <AddCircleOutlineIcon onClick={addMaintenance} className="cursor-pointer text-green-600" />
                        </Tooltip>
                                    </th>
                                </tr>
                                <tr>
                                    <th className="border text-base text-center font-small text-gray-900 px-1 py-1 text-left">Medicine Name
                                    </th>
                                    <th className="border text-base text-center font-small text-gray-900 px-1 py-1 text-left">Dosage
                                    </th>
                                    <th className="border text-base text-center font-small text-gray-900 px-1 py-1 text-left">Quantity
                                    </th>
                                    <th className="border text-base text-center font-small text-gray-900 px-1 py-1 text-left">Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                { medicines && medicines.map((item, index) => (
                                     <>
                                        <tr className="border" key={index}>
                                            <td className="border p-2 whitespace-nowrap text-center text-sm font-semibold text-black">{ item.medicine }
                                            </td>
                                            <td className="border p-2 whitespace-nowrap text-center text-sm font-semibold text-black">{ item.dosage }
                                            </td>
                                            <td className="border p-2 whitespace-nowrap text-center text-sm font-semibold text-black">{ item.quantity }
                                            </td>
                                            <td className="border p-2 whitespace-nowrap text-center text-sm font-semibold text-black">
                                                <Space>
						<Tooltip title="Click to edit this maintenance" placement="top">
                                                    <EditRoundedIcon onClick={() => editMaintenance(index)} className="rounded-none border-2 border-gray-700 cursor-pointer" />
                                                </Tooltip>
						<Tooltip title="Click to delete this maintenance" placement="top">
                                                    <DeleteIcon onClick={() => deleteMaintenance(index)} className="rounded-none border-2 border-gray-700 cursor-pointer" />
                                                </Tooltip>
						</Space>
                                            </td>
                                        </tr>
                                     </>
                                    )
                                )}
                            </tbody>
                        </table>
                </div>
                <div className="w-full flex bg-white justify-center items-center py-2 gap-4 text-white">
                    &nbsp;
                </div>
                <div className="w-full px-10 py-0">
                    <Form.Item>
                        <Space>
                            <button disabled={saveDisabled} className="px-8 py-3 w-64 border rounded-none bg-active uppercase text-xl hover:bg-yellow-500 drop-shadow">
                                <Space size="middle"><SaveIcon className="animate-pulse" />Save</Space>
                            </button>
                            { (page === 'add' || page === 'edit') && (
                            <button
                                onClick={() => {
                                    setShowModal(false);
                                    reloadPage();
                                }}
                                className="px-8 py-3 w-64 border rounded-none bg-sixth uppercase text-xl hover:bg-yellow-500">
                                <Space size="middle">
                                    <CloseIcon className="animate-pulse" />Close
                                </Space>
                            </button>
                            )}
                        </Space>
                    </Form.Item>
                </div>
        </div>
    </Form>
    </>
  );
}


