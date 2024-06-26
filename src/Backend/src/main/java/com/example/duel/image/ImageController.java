package com.example.duel.image;

import com.example.duel._core.security.CustomUserDetails;
import com.example.duel._core.utils.ApiUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.validation.Errors;

import jakarta.validation.Valid;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class ImageController {
    final private ImageService imageService;

    // 폴더 별로 관리 하기 위해 나눔(user, roadmap, post)
    @GetMapping("/images/users/{userId}")
    public ResponseEntity<?> findUserImage(@PathVariable("userId") Long userId){
        ImageResponse.UserImageDTO responseDTO = imageService.findUserImage(userId);

        return ResponseEntity.ok().body(ApiUtils.success(HttpStatus.OK, responseDTO));
    }

    @PostMapping("/images/users/{userId}/s3")
    public ResponseEntity<?> uploadUserImage(@PathVariable("userId") Long userId, @RequestParam("image") MultipartFile file,
                                             @AuthenticationPrincipal CustomUserDetails userDetails) {

        imageService.updateUserImageS3(userId, file, userDetails.getUser());

        return ResponseEntity.ok().body(ApiUtils.success(HttpStatus.OK, null));
    }

    @PostMapping("/images/users/{userId}")
    public ResponseEntity<?> uploadUserImage(@RequestBody @Valid ImageRequest.UpdateUserImageDTO requestDTO, Errors errors,
                                             @PathVariable("userId") Long userId, @AuthenticationPrincipal CustomUserDetails userDetails) {

        imageService.updateUserImage(userId, requestDTO, userDetails.getUser());

        return ResponseEntity.ok().body(ApiUtils.success(HttpStatus.OK, null));
    }

    @GetMapping("/images/roadmaps/{roadmapId}")
    public ResponseEntity<?> findRoadmapImage(@PathVariable("userId") Long roadmapId){
        ImageResponse.RoadmapImageDTO responseDTO = imageService.findRoadmapImage(roadmapId);

        return ResponseEntity.ok().body(ApiUtils.success(HttpStatus.OK, responseDTO));
    }

    @PostMapping("/images/roadmaps/{roadmapId}")
    public ResponseEntity<?> uploadRoadmapImage(@PathVariable("userId") Long roadmapId,
                                             @RequestParam("image") MultipartFile file) {

        imageService.updateRoadmapImage(roadmapId, file);

        return ResponseEntity.ok().body(ApiUtils.success(HttpStatus.CREATED, null));
    }

    @PostMapping("/images/write")
    public ResponseEntity<?> postImage(@RequestParam("image") MultipartFile file){
        ImageResponse.PostImageDTO responseDTO = imageService.postImage(file);

        return ResponseEntity.ok().body(ApiUtils.success(HttpStatus.CREATED, responseDTO));
    }
}
