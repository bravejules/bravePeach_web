package model;
import org.apache.ibatis.type.Alias;

import java.util.Date;

/**
 * Created by Naver on 2016-12-26.
 */
@Alias("member")
public abstract class Member {
    private int mbNo;
    private int mbId;
    private int mbPswd;
    private int mbLevel;
    private String mbName;
    private String mbPhone;
    private String mbAddress;
    private String mbAddressExtra;
    private String mbGender;
    private Date mbBirthday;
    private String mbCity;
    private String mbProfileImgId;
    private String regIp;
    private String updateIp;
    private Date updateDateTime;
    private Date leaveDateTime;
    private Date loginDateTime;
    private int terms1;
    private int terms2;
    private int terms3;
    private int terms4;
    private String version;
    private int hidden;
}
