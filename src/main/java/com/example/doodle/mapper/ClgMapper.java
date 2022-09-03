package com.example.doodle.mapper;

import com.example.doodle.dto.*;
import org.apache.ibatis.annotations.Mapper;

import java.util.*;

@Mapper
public interface ClgMapper {
    void createClg(ClgDTO clgDTO);

    void includeMember(String userid, int clgid);

    void unvalidateClg(int clgid);

    void deleteClgMembers(int clgid);

    void modifyClg(ClgDTO clgDTO);

    ClgDTO getClgById(int userid);

    String getManagerId(int clgid);
    String findMemberById(String userid, int clgid);

    List<ClgDTO> findAll(String userid);

    void removeMember(String userid, int clgid);

    List<UserDTO> getClgMembers(int clgid);

    List<AcheiveDTO> getAchieveRate(int clgid);

    List<ClgDTO> getClgByCateId(String clgCateId);

    List<ClgAchieveDTO> getClgAchieve(int clgid);

    void changeClgColor(int clgid, String userid, String color);


}
