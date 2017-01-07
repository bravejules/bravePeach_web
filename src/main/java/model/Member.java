package model;
import org.apache.ibatis.type.Alias;

import java.sql.Timestamp;
import java.util.Date;

/**
 * Created by Naver on 2016-12-26.
 */
@Alias("member")
public class Member {
    private int mbNo;
    private String mbId;
    private String mbPswd;
    private int mbLevel;
    private String mbName;
    private String mbPhone;
    private String mbAddress;
    private String mbAddressExtra;
    private String mbGender;
    private String mbBirthday;
    private String mbCity;
    private String mbProfileImgId;
    private String regIp;
    private String updateIp;
    private Timestamp updateDateTime;
    private Timestamp leaveDateTime;
    private Timestamp loginDateTime;
    private String terms1;
    private String terms2;
    private String terms3;
    private String terms4;
    private String version;
    private String hidden;

    public int getMbNo() {
        return mbNo;
    }

    public void setMbNo(int mbNo) {
        this.mbNo = mbNo;
    }

    public String getMbId() {
        return mbId;
    }

    public void setMbId(String mbId) {
        this.mbId = mbId;
    }

    public String getMbPswd() {
        return mbPswd;
    }

    public void setMbPswd(String mbPswd) {
        this.mbPswd = mbPswd;
    }

    public int getMbLevel() {
        return mbLevel;
    }

    public void setMbLevel(int mbLevel) {
        this.mbLevel = mbLevel;
    }

    public String getMbName() {
        return mbName;
    }

    public void setMbName(String mbName) {
        this.mbName = mbName;
    }

    public String getMbPhone() {
        return mbPhone;
    }

    public void setMbPhone(String mbPhone) {
        this.mbPhone = mbPhone;
    }

    public String getMbAddress() {
        return mbAddress;
    }

    public void setMbAddress(String mbAddress) {
        this.mbAddress = mbAddress;
    }

    public String getMbAddressExtra() {
        return mbAddressExtra;
    }

    public void setMbAddressExtra(String mbAddressExtra) {
        this.mbAddressExtra = mbAddressExtra;
    }

    public String getMbGender() {
        return mbGender;
    }

    public void setMbGender(String mbGender) {
        this.mbGender = mbGender;
    }

    public String getMbBirthday() {
        return mbBirthday;
    }

    public void setMbBirthday(String mbBirthday) {
        this.mbBirthday = mbBirthday;
    }

    public String getMbCity() {
        return mbCity;
    }

    public void setMbCity(String mbCity) {
        this.mbCity = mbCity;
    }

    public String getMbProfileImgId() {
        return mbProfileImgId;
    }

    public void setMbProfileImgId(String mbProfileImgId) {
        this.mbProfileImgId = mbProfileImgId;
    }

    public String getRegIp() {
        return regIp;
    }

    public void setRegIp(String regIp) {
        this.regIp = regIp;
    }

    public String getUpdateIp() {
        return updateIp;
    }

    public void setUpdateIp(String updateIp) {
        this.updateIp = updateIp;
    }

    public Timestamp getUpdateDateTime() {
        return updateDateTime;
    }

    public void setUpdateDateTime(Timestamp updateDateTime) {
        this.updateDateTime = updateDateTime;
    }

    public Timestamp getLeaveDateTime() {
        return leaveDateTime;
    }

    public void setLeaveDateTime(Timestamp leaveDateTime) {
        this.leaveDateTime = leaveDateTime;
    }

    public Timestamp getLoginDateTime() {
        return loginDateTime;
    }

    public void setLoginDateTime(Timestamp loginDateTime) {
        this.loginDateTime = loginDateTime;
    }

    public String getTerms1() {
        return terms1;
    }

    public void setTerms1(String terms1) {
        this.terms1 = terms1;
    }

    public String getTerms2() {
        return terms2;
    }

    public void setTerms2(String terms2) {
        this.terms2 = terms2;
    }

    public String getTerms3() {
        return terms3;
    }

    public void setTerms3(String terms3) {
        this.terms3 = terms3;
    }

    public String getTerms4() {
        return terms4;
    }

    public void setTerms4(String terms4) {
        this.terms4 = terms4;
    }

    public String getVersion() {
        return version;
    }

    public void setVersion(String version) {
        this.version = version;
    }

    public String getHidden() {
        return hidden;
    }

    public void setHidden(String hidden) {
        this.hidden = hidden;
    }

    @Override
    public String toString() {
        final StringBuffer sb = new StringBuffer("Member{");
        sb.append("mbNo=").append(mbNo);
        sb.append(", mbId='").append(mbId).append('\'');
        sb.append(", mbPswd='").append(mbPswd).append('\'');
        sb.append(", mbLevel=").append(mbLevel);
        sb.append(", mbName='").append(mbName).append('\'');
        sb.append(", mbPhone='").append(mbPhone).append('\'');
        sb.append(", mbAddress='").append(mbAddress).append('\'');
        sb.append(", mbAddressExtra='").append(mbAddressExtra).append('\'');
        sb.append(", mbGender='").append(mbGender).append('\'');
        sb.append(", mbBirthday='").append(mbBirthday).append('\'');
        sb.append(", mbCity='").append(mbCity).append('\'');
        sb.append(", mbProfileImgId='").append(mbProfileImgId).append('\'');
        sb.append(", regIp='").append(regIp).append('\'');
        sb.append(", updateIp='").append(updateIp).append('\'');
        sb.append(", updateDateTime=").append(updateDateTime);
        sb.append(", leaveDateTime=").append(leaveDateTime);
        sb.append(", loginDateTime=").append(loginDateTime);
        sb.append(", terms1='").append(terms1).append('\'');
        sb.append(", terms2='").append(terms2).append('\'');
        sb.append(", terms3='").append(terms3).append('\'');
        sb.append(", terms4='").append(terms4).append('\'');
        sb.append(", version='").append(version).append('\'');
        sb.append(", hidden='").append(hidden).append('\'');
        sb.append('}');
        return sb.toString();
    }
}
