import React from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../../../router/all_routes";
import ImageWithBasePath from "../../../../../core/common/imageWithBasePath";

const AddLanguage = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="d-md-flex d-block align-items-center justify-content-between mb-4">
            <div className="my-auto">
              <h4 className="page-title mb-1">Language</h4>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to={all_routes.dashboard}>
                      <i className="ti ti-home text-primary" />
                    </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="#">System Settings</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Language
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          {/* Page Header */}
          {/* App Settings */}
          <div className="card setting-card">
            <div className="card-body">
              <div className="row">
                <div className="col-md-12">
                  <div className="card d-inline-flex setting-header mb-3">
                    <div className="card-body d-flex align-items-center flex-wrap row-gap-2 p-0">
                      <Link to={all_routes.profileSettings}>
                        <i className="ti ti-settings-cog me-2" />
                        General Settings
                      </Link>
                      <Link to={all_routes.companysettings} className=" ps-3">
                        <i className="ti ti-apps me-2" />
                        App Settings
                      </Link>
                      <Link
                        to={all_routes.localization_settings}
                        className="active"
                      >
                        <i className="ti ti-device-ipad-horizontal-cog me-2" />
                        System Settings
                      </Link>
                      <Link to={all_routes.AppearanceSettings}>
                        <i className="ti ti-layers-subtract me-2" />
                        Theme Settings
                      </Link>
                      <Link to={all_routes.storage_settings} className="pe-3">
                        <i className="ti ti-settings-2 me-2" />
                        Other Settings
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row gx-3">
                <div className="col-xl-3 col-md-4">
                  <div className="card mb-3 mb-md-0">
                    <div className="card-body setting-sidebar">
                      <div className="d-flex">
                        <Link
                          to={all_routes.localization_settings}
                          className=" rounded flex-fill"
                        >
                          <i className="ti ti-globe me-2" />
                          Localization
                        </Link>
                      </div>
                      <div className="d-flex">
                        <Link
                          to={all_routes.email_settings}
                          className=" rounded flex-fill"
                        >
                          <i className="ti ti-mail-cog me-2" />
                          Email Settings
                        </Link>
                      </div>
                      <div className="d-flex">
                        <Link
                          to={all_routes.sms_settings}
                          className=" rounded flex-fill"
                        >
                          <i className="ti ti-message-cog me-2" />
                          SMS Settings
                        </Link>
                      </div>
                      <div className="d-flex">
                        <Link
                          to={all_routes.otp_settings}
                          className=" rounded flex-fill"
                        >
                          <i className="ti ti-password me-2" />
                          OTP Settings
                        </Link>
                      </div>
                      <div className="d-flex">
                        <Link
                          to={all_routes.LanguageSettings}
                          className="active rounded flex-fill"
                        >
                          <i className="ti ti-language me-2" />
                          Language
                        </Link>
                      </div>
                      <div className="d-flex">
                        <Link
                          to={all_routes.gdpr_settings}
                          className="rounded flex-fill"
                        >
                          <i className="ti ti-cookie me-2" />
                          GDPR Cookies
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-9 col-md-8">
                  <div className="card setting-content mb-0">
                    <div className="card-header px-0 mx-3">
                      <h4>Language</h4>
                    </div>
                    <div className="card-body pb-0">
                      <div className="card mb-3">
                        <div className="card-header">
                          <div className="row align-items-center g-3">
                            <div className="col-sm-5">
                              <h6>Language</h6>
                            </div>
                            <div className="col-sm-7">
                              <div className="d-flex align-items-center justify-content-sm-end flex-wrap row-gap-2">
                                <Link to={all_routes.LanguageSettings}
                                  className="btn btn-sm btn-primary d-inline-flex align-items-center me-3"
                                >
                                  <i className="ti ti-arrow-left me-2" />
                                  Back to Translations
                                </Link>
                                <Link to="#"
                                  className="btn btn-sm btn-outline-dark d-inline-flex align-items-center me-3"
                                >
                                  <ImageWithBasePath
                                    src="assets/admin/img/flag/ar.png"
                                    className="me-2"
                                    alt=""
                                  />
                                  Arabic
                                </Link>
                                <div className="flex-shrink-0 flex-fill">
                                  <span className="d-block">Progress</span>
                                  <div className="d-flex align-items-center">
                                    <div className="progress progress-xs w-100">
                                      <div
                                        className="progress-bar bg-warning rounded"
                                        role="progressbar"
                                        style={{ width: "80%" }}
                                        aria-valuenow={80}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                      />
                                    </div>
                                    <span className="d-inline-flex fs-12 ms-2">
                                      80%
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card-body p-0">
                          <div className="table-responsive">
                            <table className="table">
                              <thead className="thead-light">
                                <tr>
                                  <th className="w-50">English</th>
                                  <th className="w-50">Arabic</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>Name</td>
                                  <td>
                                    <input
                                      type="text"
                                      className="form-control text-end"
                                      defaultValue="اسم"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td>Email Address</td>
                                  <td>
                                    <input
                                      type="text"
                                      className="form-control text-end"
                                      defaultValue="عنوان البريد الإلكتروني"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td>Phone Number</td>
                                  <td>
                                    <input
                                      type="text"
                                      className="form-control text-end"
                                      defaultValue="رقم التليفون"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td>Reg Date</td>
                                  <td>
                                    <input
                                      type="text"
                                      className="form-control text-end"
                                      defaultValue="تاريخ التسجيل"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td>Country</td>
                                  <td>
                                    <input
                                      type="text"
                                      className="form-control text-end"
                                      defaultValue="دولة"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td>Last Seen</td>
                                  <td>
                                    <input
                                      type="text"
                                      className="form-control text-end"
                                      defaultValue="شوهد آخر مرة"
                                    />
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /App Settings */}
        </div>
      </div>
    </>
  );
};

export default AddLanguage;