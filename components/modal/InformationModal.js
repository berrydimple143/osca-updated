import React, { useState } from "react";
import { Input, Form, Select, Space, message } from 'antd';
import { CloseSquareOutlined } from '@ant-design/icons';
import { upper } from '../../services/helperService';

export default function InformationModal({
  children,
  setShowInformationModal,
  memberInfo,
  photo,
  transaction,
  reloadPage,
  childrenInfo,
  maintenanceInfo
}) {

  return (
      <>
          <div
            className="justify-center items-center flex flex-col overflow-x-hidden fixed overflow-y-auto inset-0 z-50 outline-none focus:outline-none"
          >
              <div className="w-11/12 h-screen my-10 mx-auto">

                { photo && (
                  <div className="relative flex w-11/12 bg-white outline-none focus:outline-none">
                        <div className="p-5 shadow-sm w-full">
                            <img src={`${photo}`} />
                        </div>
                  </div>
                )}

                <div className="border-0 rounded-none relative flex items-center w-11/12 bg-yellow-500 outline-none focus:outline-none">
                      <div className="p-1 shadow-sm w-full text-center">
                          <h1 className="font-bold uppercase text-lg text-white">Personal Information</h1>
                      </div>
                </div>
                <div className="border border-b-1 border-yellow-500/25 rounded-none shadow-lg relative flex flex-col md:flex-row w-11/12 bg-white outline-none focus:outline-none">
                      <div className="p-1 shadow-sm w-full">
                          <h1 className="font-bold">ID Number: {upper(memberInfo.id_number)}</h1>
                      </div>
                      <div className="p-1 shadow-sm w-full">
                          <h1 className="font-bold">Age: {upper(memberInfo.age)} yrs. old</h1>
                      </div>
                      <div className="p-1 shadow-sm w-full">
                          <h1 className="font-bold">Extension Name: {upper(memberInfo.extension_name)}</h1>
                      </div>
                </div>

                <div className="border border-b-1 border-yellow-500/25 rounded-none shadow-lg relative flex flex-col md:flex-row w-11/12 bg-white outline-none focus:outline-none">
                      <div className="p-1 shadow-sm w-full">
                          <h1 className="font-bold">First Name: {upper(memberInfo.first_name)}</h1>
                      </div>
                      <div className="p-1 shadow-sm w-full">
                          <h1 className="font-bold">Middle Name: {upper(memberInfo.middle_name)}</h1>
                      </div>
                      <div className="p-1 shadow-sm w-full">
                          <h1 className="font-bold">Last Name: {upper(memberInfo.last_name)}</h1>
                      </div>
                </div>

                <div className="border border-b-1 border-yellow-500/25 rounded-none shadow-lg relative flex flex-col md:flex-row w-11/12 bg-white outline-none focus:outline-none">
                      <div className="p-1 shadow-sm w-full">
                          <h1 className="font-bold">Address: {upper(memberInfo.address)}</h1>
                      </div>
                      <div className="p-1 shadow-sm w-full">
                          <h1 className="font-bold">E-mail Address: {upper(memberInfo.email)}</h1>
                      </div>
                      <div className="p-1 shadow-sm w-full">
                          <h1 className="font-bold">Telephone: {upper(memberInfo.phone)}</h1>
                      </div>
                </div>

                <div className="border border-b-1 border-yellow-500/25 rounded-none shadow-lg relative flex flex-col md:flex-row w-11/12 bg-white outline-none focus:outline-none">
                      <div className="p-1 shadow-sm w-full">
                          <h1 className="font-bold">Mobile No.: {upper(memberInfo.mobile)}</h1>
                      </div>
                      <div className="p-1 shadow-sm w-full">
                          <h1 className="font-bold">Date of Birth: {upper(memberInfo.birth_date)}</h1>
                      </div>
                      <div className="p-1 shadow-sm w-full">
                          <h1 className="font-bold">Place of Birth: {upper(memberInfo.birth_place)}</h1>
                      </div>
                </div>

                <div className="border border-b-1 border-yellow-500/25 rounded-none shadow-lg relative flex flex-col md:flex-row w-11/12 bg-white outline-none focus:outline-none">
                      <div className="p-1 shadow-sm w-full">
                          <h1 className="font-bold">Messenger: {upper(memberInfo.messenger)}</h1>
                      </div>
                      <div className="p-1 shadow-sm w-full">
                          <h1 className="font-bold">Ethnic Origin: {upper(memberInfo.ethnic_origin)}</h1>
                      </div>
                      <div className="p-1 shadow-sm w-full">
                          <h1 className="font-bold">Language Spoken/Written: {upper(memberInfo.language)}</h1>
                      </div>
                </div>

                <div className="border border-b-1 border-yellow-500/25 rounded-none shadow-lg relative flex flex-col md:flex-row w-11/12 bg-white outline-none focus:outline-none">
                      <div className="p-1 shadow-sm w-full">
                          <h1 className="font-bold">Capability To Travel: {upper(memberInfo.able_to_travel)}</h1>
                      </div>
                      <div className="p-1 shadow-sm w-full">
                          <h1 className="font-bold">Active in Politics: {upper(memberInfo.active_in_politics)}</h1>
                      </div>
                      <div className="p-1 shadow-sm w-full">
                          <h1 className="font-bold">SC Association/Org ID No.: {upper(memberInfo.association_id)}</h1>
                      </div>
                </div>

                <div className="border border-b-1 border-yellow-500/25 rounded-none shadow-lg relative flex flex-col md:flex-row w-11/12 bg-white outline-none focus:outline-none">
                      <div className="p-1 shadow-sm w-full">
                          <h1 className="font-bold">Other ID: {upper(memberInfo.other_id)}</h1>
                      </div>
                      <div className="p-1 shadow-sm w-full">
                          <h1 className="font-bold">Area of Specialization: {upper(memberInfo.area)}</h1>
                      </div>
                      <div className="p-1 shadow-sm w-full">
                          <h1 className="font-bold">Community Service/Others: {upper(memberInfo.service)}</h1>
                      </div>
                </div>

                <div className="border border-b-1 border-yellow-500/25 rounded-none shadow-lg relative flex flex-col md:flex-row w-11/12 bg-white outline-none focus:outline-none">
                      <div className="p-1 shadow-sm w-full">
                          <h1 className="font-bold">Living/residing with: {upper(memberInfo.companion)}</h1>
                      </div>
                      <div className="p-1 shadow-sm w-full">
                          <h1 className="font-bold">Housing: {upper(memberInfo.type)}</h1>
                      </div>
                      <div className="p-1 shadow-sm w-full">
                          <h1 className="font-bold">Involvement in Community: {upper(memberInfo.activity)}</h1>
                      </div>
                </div>

                <div className="border border-b-1 border-yellow-500/25 rounded-none shadow-lg relative flex flex-col md:flex-row w-11/12 bg-white outline-none focus:outline-none">
                      <div className="p-1 shadow-sm w-full">
                          <h1 className="font-bold">Gender: {upper(memberInfo.gender)}</h1>
                      </div>
                      <div className="p-1 shadow-sm w-full">
                          <h1 className="font-bold">Civil Status: {upper(memberInfo.civil_status)}</h1>
                      </div>
                      <div className="p-1 shadow-sm w-full">
                          <h1 className="font-bold">Blood Type: {upper(memberInfo.blood_type)}</h1>
                      </div>
                </div>

                <div className="border border-b-1 border-yellow-500/25 rounded-none shadow-lg relative flex flex-col md:flex-row w-11/12 bg-white outline-none focus:outline-none">
                      <div className="p-1 shadow-sm w-full">
                          <h1 className="font-bold">Religion: {upper(memberInfo.religion)}</h1>
                      </div>
                      <div className="p-1 shadow-sm w-full">
                          <h1 className="font-bold">Highest Educational Attainment: {upper(memberInfo.education)}</h1>
                      </div>
                      <div className="p-1 shadow-sm w-full">
                          <h1 className="font-bold">GSIS: {upper(memberInfo.gsis)}</h1>
                      </div>
                </div>

                <div className="border border-b-1 border-yellow-500/25 rounded-none shadow-lg relative flex flex-col md:flex-row w-11/12 bg-white outline-none focus:outline-none">
                      <div className="p-1 shadow-sm w-full">
                          <h1 className="font-bold">SSS: {upper(memberInfo.sss)}</h1>
                      </div>
                      <div className="p-1 shadow-sm w-full">
                          <h1 className="font-bold">TIN: {upper(memberInfo.tin)}</h1>
                      </div>
                      <div className="p-1 shadow-sm w-full">
                          <h1 className="font-bold">PhilHealth: {upper(memberInfo.philhealth)}</h1>
                      </div>
                </div>

                <div className="border border-b-1 border-yellow-500/25 rounded-none shadow-lg relative flex flex-col md:flex-row w-11/12 bg-white outline-none focus:outline-none">
                      <div className="p-1 shadow-sm w-full">
                          <h1 className="font-bold">Employment Status: {upper(memberInfo.employment_status)}</h1>
                      </div>
                      <div className="p-1 shadow-sm w-full">
                          <h1 className="font-bold">Member Status: {upper(memberInfo.member_status)}</h1>
                      </div>
                      <div className="p-1 shadow-sm w-full">
                          <h1 className="font-bold">Classification: {upper(memberInfo.classification)}</h1>
                      </div>
                </div>

                <div className="border border-b-1 border-yellow-500/25 rounded-none shadow-lg relative flex flex-col md:flex-row w-11/12 bg-white outline-none focus:outline-none">
                      <div className="p-1 shadow-sm w-full">
                          <h1 className="font-bold">Monthly Pension: {upper(memberInfo.pension)}</h1>
                      </div>
                      <div className="p-1 shadow-sm w-full">
                          <h1 className="font-bold">In case of Emergency: {upper(memberInfo.contact_person)}</h1>
                      </div>
                      <div className="p-1 shadow-sm w-full">
                          <h1 className="font-bold">Emergency Contact Number: {upper(memberInfo.contact_person_number)}</h1>
                      </div>
                </div>

                <div className="border-0 rounded-none relative flex items-center w-11/12 bg-yellow-500 outline-none focus:outline-none">
                      <div className="p-1 shadow-sm w-full text-center">
                          <h1 className="font-bold uppercase text-lg text-white">Economic Profile</h1>
                      </div>
                </div>

                <div className="border border-b-1 border-yellow-500/25 rounded-none shadow-lg relative flex flex-col md:flex-row w-11/12 bg-white outline-none focus:outline-none">
                      <div className="p-1 shadow-sm w-full">
                          <h1 className="font-bold">Source of Income: {upper(memberInfo.source_of_income)}</h1>
                      </div>
                      <div className="p-1 shadow-sm w-full">
                          <h1 className="font-bold">Assets and Properties: {upper(memberInfo.assets)}</h1>
                      </div>
                      <div className="p-1 shadow-sm w-full">
                          <h1 className="font-bold">Monthly Income: {upper(memberInfo.income_range)}</h1>
                      </div>
                </div>

                <div className="border-0 rounded-none relative flex items-center w-11/12 bg-yellow-500 outline-none focus:outline-none">
                      <div className="p-1 shadow-sm w-full text-center">
                          <h1 className="font-bold uppercase text-lg text-white">Vaccination Information</h1>
                      </div>
                </div>

                <div className="border border-b-1 border-yellow-500/25 rounded-none shadow-lg relative flex flex-col md:flex-row w-11/12 bg-white outline-none focus:outline-none">
                      <div className="p-1 shadow-sm w-full">
                          <h1 className="font-bold">Vaccine Name: {upper(memberInfo.vaccine)}</h1>
                      </div>
                      <div className="p-1 shadow-sm w-full">
                          <h1 className="font-bold">Vaccination Dose/Stage: {upper(memberInfo.dose)}</h1>
                      </div>
                      <div className="p-1 shadow-sm w-full">
                          <h1 className="font-bold">Vaccination Date: {upper(memberInfo.vaccination_date)}</h1>
                      </div>
                </div>

                <div className="border-0 rounded-none relative flex items-center w-11/12 bg-yellow-500 outline-none focus:outline-none">
                      <div className="p-1 shadow-sm w-full text-center">
                          <h1 className="font-bold uppercase text-lg text-white">Family Composition</h1>
                      </div>
                </div>

                <div className="border border-b-1 border-yellow-500/25 rounded-none shadow-lg relative flex flex-col md:flex-row w-11/12 bg-white outline-none focus:outline-none">
                      <div className="p-1 shadow-sm w-full">
                          <h1 className="font-bold">Spouse's First Name: {upper(memberInfo.spouse_first_name)}</h1>
                      </div>
                      <div className="p-1 shadow-sm w-full">
                          <h1 className="font-bold">Spouse's Middle Name: {upper(memberInfo.spouse_middle_name)}</h1>
                      </div>
                      <div className="p-1 shadow-sm w-full">
                          <h1 className="font-bold">Spouse's Last Name: {upper(memberInfo.spouse_last_name)}</h1>
                      </div>
                      <div className="p-1 shadow-sm w-full">
                          <h1 className="font-bold">Spouse's Extension Name: {upper(memberInfo.spouse_extension_name)}</h1>
                      </div>
                </div>

                <div className="border border-b-1 border-yellow-500/25 rounded-none shadow-lg relative flex flex-col md:flex-row w-11/12 bg-white outline-none focus:outline-none">
                      <div className="p-1 shadow-sm w-full">
                          <h1 className="font-bold">Father's First Name: {upper(memberInfo.father_first_name)}</h1>
                      </div>
                      <div className="p-1 shadow-sm w-full">
                          <h1 className="font-bold">Father's Middle Name: {upper(memberInfo.father_middle_name)}</h1>
                      </div>
                      <div className="p-1 shadow-sm w-full">
                          <h1 className="font-bold">Father's Last Name: {upper(memberInfo.father_last_name)}</h1>
                      </div>
                      <div className="p-1 shadow-sm w-full">
                          <h1 className="font-bold">Father's Extension Name: {upper(memberInfo.father_extension_name)}</h1>
                      </div>
                </div>

                <div className="border border-b-1 border-yellow-500/25 rounded-none shadow-lg relative flex flex-col md:flex-row w-11/12 bg-white outline-none focus:outline-none">
                      <div className="p-1 shadow-sm w-full">
                          <h1 className="font-bold">Mother's First Name: {upper(memberInfo.mother_first_name)}</h1>
                      </div>
                      <div className="p-1 shadow-sm w-full">
                          <h1 className="font-bold">Mother's Middle Name: {upper(memberInfo.mother_middle_name)}</h1>
                      </div>
                      <div className="p-1 shadow-sm w-full">
                          <h1 className="font-bold">Mother's Last Name: {upper(memberInfo.mother_last_name)}</h1>
                      </div>
                      <div className="p-1 shadow-sm w-full">
                          <h1 className="font-bold">Mother's Extension Name: {upper(memberInfo.mother_extension_name)}</h1>
                      </div>
                </div>

                { childrenInfo && (
                    <>
                      <div className="border rounded-none relative flex items-center w-11/12 bg-white outline-none focus:outline-none">
                            <div className="p-0 shadow-sm w-full text-center">
                                <h1 className="font-bold uppercase text-lg text-gray-600">Children</h1>
                            </div>
                      </div>

                      <div className="border border-b-1 border-yellow-500/25 rounded-none shadow-lg relative flex flex-col md:flex-row w-11/12 bg-white outline-none focus:outline-none">
                            <div className="p-1 shadow-sm w-full">
                                <h1 className="font-bold">No.</h1>
                            </div>
                            <div className="p-1 shadow-sm w-full">
                                <h1 className="font-bold">Full Name</h1>
                            </div>
                            <div className="p-1 shadow-sm w-full">
                                <h1 className="font-bold">Occupation</h1>
                            </div>
                            <div className="p-1 shadow-sm w-full">
                                <h1 className="font-bold">Income</h1>
                            </div>
                            <div className="p-1 shadow-sm w-full">
                                <h1 className="font-bold">Age</h1>
                            </div>
                            <div className="p-1 shadow-sm w-full">
                                <h1 className="font-bold">Dependency</h1>
                            </div>
                      </div>

                      { childrenInfo.map((item, index) =>
                          <div key={index} className="border border-b-1 border-yellow-500/25 rounded-none shadow-lg relative flex flex-col md:flex-row w-11/12 bg-white outline-none focus:outline-none">
                                <div className="p-1 shadow-sm w-full">
                                    <h1 className="font-bold">{ index + 1 }</h1>
                                </div>
                                <div className="p-1 shadow-sm w-full">
                                    <h1 className="font-bold">{upper(item.full_name)}</h1>
                                </div>
                                <div className="p-1 shadow-sm w-full">
                                    <h1 className="font-bold">{upper(item.occupation)}</h1>
                                </div>
                                <div className="p-1 shadow-sm w-full">
                                    <h1 className="font-bold">{upper(item.income)}</h1>
                                </div>
                                <div className="p-1 shadow-sm w-full">
                                    <h1 className="font-bold">{upper(item.age)}</h1>
                                </div>
                                <div className="p-1 shadow-sm w-full">
                                    <h1 className="font-bold">{upper(item.dependency)}</h1>
                                </div>
                          </div>
                      )}
                    </>
                )}

                <div className="border-0 rounded-none relative flex items-center w-11/12 bg-yellow-500 outline-none focus:outline-none">
                      <div className="p-1 shadow-sm w-full text-center">
                          <h1 className="font-bold uppercase text-lg text-white">Health Profile</h1>
                      </div>
                </div>

                <div className="border border-b-1 border-yellow-500/25 rounded-none shadow-lg relative flex flex-col md:flex-row w-11/12 bg-white outline-none focus:outline-none">
                      <div className="p-1 shadow-sm w-full">
                          <h1 className="font-bold">Social Problems: {upper(memberInfo.social_problem)}</h1>
                      </div>
                      <div className="p-1 shadow-sm w-full">
                          <h1 className="font-bold">Economic Problems: {upper(memberInfo.economic_problem)}</h1>
                      </div>
                      <div className="p-1 shadow-sm w-full">
                          <h1 className="font-bold">Health Issues: {upper(memberInfo.health_issue)}</h1>
                      </div>
                      <div className="p-1 shadow-sm w-full">
                          <h1 className="font-bold">Common Illness: {upper(memberInfo.sickness)}</h1>
                      </div>
                </div>

                { maintenanceInfo && (
                    <>
                      <div className="border-0 rounded-none relative flex items-center w-11/12 bg-yellow-500 outline-none focus:outline-none">
                            <div className="p-1 shadow-sm w-full text-center">
                                <h1 className="font-bold uppercase text-lg text-white">List of Medicines for Maintenance</h1>
                            </div>
                      </div>

                      <div className="border border-b-1 border-yellow-500/25 rounded-none shadow-lg relative flex flex-col md:flex-row w-11/12 bg-white outline-none focus:outline-none">
                            <div className="p-1 shadow-sm w-full">
                                <h1 className="font-bold">No.</h1>
                            </div>
                            <div className="p-1 shadow-sm w-full">
                                <h1 className="font-bold">Medicine Name</h1>
                            </div>
                            <div className="p-1 shadow-sm w-full">
                                <h1 className="font-bold">Dosage</h1>
                            </div>
                            <div className="p-1 shadow-sm w-full">
                                <h1 className="font-bold">Quantity</h1>
                            </div>
                      </div>
                      { maintenanceInfo.map((item, index) =>
                          <div key={index} className="border border-b-1 border-yellow-500/25 rounded-none shadow-lg relative flex flex-col md:flex-row w-11/12 bg-white outline-none focus:outline-none">
                                <div className="p-1 shadow-sm w-full">
                                    <h1 className="font-bold">{ index + 1 }</h1>
                                </div>
                                <div className="p-1 shadow-sm w-full">
                                    <h1 className="font-bold">{upper(item.medicine)}</h1>
                                </div>
                                <div className="p-1 shadow-sm w-full">
                                    <h1 className="font-bold">{upper(item.dosage)}</h1>
                                </div>
                                <div className="p-1 shadow-sm w-full">
                                    <h1 className="font-bold">{upper(item.quantity)}</h1>
                                </div>
                          </div>
                      )}
                    </>
                )}

                <div className="border-0 rounded-none relative flex items-center w-11/12 bg-yellow-500 outline-none focus:outline-none">
                      <div className="p-1 shadow-sm w-full text-center">
                          <h1 className="font-bold uppercase text-lg text-white">Inventory and Monitoring</h1>
                      </div>
                </div>

                <div className="border border-b-1 border-yellow-500/25 rounded-none shadow-lg relative flex flex-col md:flex-row w-11/12 bg-white outline-none focus:outline-none">
                      <div className="p-1 shadow-sm w-full">
                          <h1 className="font-bold">Senior ID Inventory</h1>
                      </div>
                      <div className="p-1 shadow-sm w-full">
                          <h1 className="font-bold">Date of Release</h1>
                      </div>
                      <div className="p-1 shadow-sm w-full">
                          <h1 className="font-bold">Municipality</h1>
                      </div>
                      <div className="p-1 shadow-sm w-full">
                          <h1 className="font-bold">Released by</h1>
                      </div>
                      <div className="p-1 shadow-sm w-full">
                          <h1 className="font-bold">Remarks</h1>
                      </div>
                </div>
                <>
                  {transaction && transaction.map((item, index) =>
                      <div key={index} className="border border-b-1 border-yellow-500/25 rounded-none shadow-lg relative flex flex-col md:flex-row w-11/12 bg-white outline-none focus:outline-none">
                            <div className="p-1 shadow-sm w-full">
                                <h1 className="font-bold">{upper(item.name)}</h1>
                            </div>
                            <div className="p-1 shadow-sm w-full">
                                <h1 className="font-bold">{upper(item.release_date)}</h1>
                            </div>
                            <div className="p-1 shadow-sm w-full">
                                <h1 className="font-bold">{upper(item.office_released)}</h1>
                            </div>
                            <div className="p-1 shadow-sm w-full">
                                <h1 className="font-bold">{upper(item.released_by)}</h1>
                            </div>
                            <div className="p-1 shadow-sm w-full">
                                <h1 className="font-bold">{upper(item.remarks)}</h1>
                            </div>
                      </div>
                  )}
                </>

                <div className="relative flex w-11/12 bg-white outline-none focus:outline-none">
                      <div className="p-5 shadow-sm w-full">
                          <button
                              onClick={() => {
                                  setShowInformationModal(false);
                                  reloadPage();
                              }}
                              className="px-4 py-1 w-32 border rounded-none bg-sixth uppercase text-md hover:bg-yellow-500">
                              <Space size="middle">
                                  <CloseSquareOutlined className="animate-pulse" />Close
                              </Space>
                          </button>
                      </div>
                </div>

              </div>
          </div>
          <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
       </>
  );
}

