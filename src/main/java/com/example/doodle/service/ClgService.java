package com.example.doodle.service;

import com.example.doodle.dto.AcheiveDTO;
import com.example.doodle.dto.ClgAchieveDTO;
import com.example.doodle.dto.ClgDTO;
import com.example.doodle.dto.UserDTO;
import com.example.doodle.exception.ApiRequestException;
import com.example.doodle.mapper.ClgMapper;
import com.example.doodle.mapper.UserMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

import java.util.Collections;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;


@Service
@Slf4j
public class ClgService {
    @Autowired
    ClgMapper clgMapper;
    @Autowired
    UserMapper userMapper;

    public void createClg(ClgDTO clgDTO){
        clgMapper.createClg(clgDTO);
        String manager = clgDTO.getClgmanagerid();
        int challenge = clgDTO.getClgid();
        clgMapper.includeMember(manager,challenge);
    }

    public void deleteClg(int clgid){
        clgMapper.unvalidateClg(clgid);
        clgMapper.deleteMemberInClg(clgid);
    }

    public int checkUserExist(String userid){
        UserDTO userDTO = userMapper.getUserById(userid);
        if(ObjectUtils.isEmpty(userDTO)){
            return 0;
        }
        else{
            return 1;
        }

    }

    public ClgDTO getChallengeInfo(int clgid){
        ClgDTO clgDTO = clgMapper.getClgById(clgid);
        log.info(String.valueOf(clgDTO));
        return clgDTO;
    }

    public void modifyChallenge(ClgDTO clgDTO){
        //매니저를 변경할 경우
        if(clgDTO.getClgmanagerid().equals(clgMapper.getClgById(clgDTO.getClgid()).getClgmanagerid())){
            if(clgMapper.findMemberById(clgDTO.getClgmanagerid(), clgDTO.getClgid())==null){
                throw new ApiRequestException("멤버가 아닌 회원은 매니저가 될 수 없습니다.");
            }
        }
        clgMapper.modifyClg(clgDTO);

    }

    public List<ClgDTO> getClgAll(String userid){
//        log.info(String.valueOf(clgMapper.findAll(userid)));
        return clgMapper.findAll(userid);
    }

    public List<ClgDTO> getDailyChallenges(List<ClgDTO> clgAll, Date date){
        List<ClgDTO> dailyClgs = clgAll.stream().filter(e->e.getEnd_date().after(date)).collect(Collectors.toList());
        return dailyClgs;
    }

    public void joinChallenge(String userid, int clgid) {
        if (clgMapper.findMemberById(userid, clgid) != null) {
            throw new ApiRequestException("이미 가입한 챌린지입니다.");
        }

        //valid==0이면 챌린지 참여 불가
        if (clgMapper.getClgById(clgid).getIsValid()) {
            clgMapper.includeMember(userid, clgid);

        }
    }

    public void quitChallenge(String userid, int clgid){
        if(clgMapper.findMemberById(userid, clgid) != null){
            throw new ApiRequestException("가입하지 않은 챌린지입니다.");
        }

        //챌린지 탈퇴하려는 사람이 매니저인 경우 챌린지 자체를 삭제하고 챌린지 멤버들도 탈퇴처리
        if(clgMapper.getManagerId(clgid).equals(userid)){
            clgMapper.unvalidateClg(clgid);
            clgMapper.deleteMemberInClg(clgid);
        }
        clgMapper.removeMember(userid, clgid);

    }

    public List<UserDTO> getClgMembers(int clgid){
        return clgMapper.getClgMembers(clgid);
    }

    public List<AcheiveDTO> getParticipationRank(int clgid){
        List<AcheiveDTO> participateList = clgMapper.getAchieveRate(clgid);
        quickSort(participateList, 0, participateList.size()-1);
        Collections.reverse(participateList);
        return participateList;

    }

    public List<ClgDTO> getClgByCateId(String clgCateId){

        return clgMapper.getClgByCateId(clgCateId);
    }

    public List<ClgAchieveDTO> getClgAchieve(int clgid){
        if(ObjectUtils.isEmpty(clgMapper.getClgById(clgid))){
            throw new ApiRequestException("존재하지 않는 챌린지 아이디입니다");
        }
        return clgMapper.getClgAchieve(clgid);
    }

    public void changeClgColor(int clgid, String userid, String color){
        clgMapper.changeClgColor(clgid, userid, color);
    }

    public static void quickSort(List<AcheiveDTO> list, int start, int end){
        int pivot = start;
        int left = start+1;
        int right = end;

        while(left<= right){
            while(left<=end && list.get(left).getAchieveRate() <= list.get(pivot).getAchieveRate()){
                left+=1;
            }
            while(right > start && list.get(right).getAchieveRate()>= list.get(pivot).getAchieveRate()){
                right -=1;
            }
            if(left>right){
                AcheiveDTO tmp = list.get(right);
                list.set(right, list.get(pivot));
                list.set(pivot, tmp);
            }
            else{
                AcheiveDTO tmp = list.get(right);
                list.set(right, list.get(left));
                list.set(left, tmp);

            }

            quickSort(list,start,right-1 );
            quickSort(list, right+1, end);
        }

    }
}
