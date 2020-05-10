<template>
  <div>
    <el-upload
      action
      list-type="picture-card"
      :http-request="upload"
      :file-list="fileList"
      :on-preview="handlePictureCardPreview"
      :before-upload="beforeUpload"
      :on-remove="handleRemove"
    >
      <i class="el-icon-plus"></i>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过5M</div>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt />
    </el-dialog>
  </div>
</template>
<script>
export default {
    data(){
        return{
            fileList:[]
        }
    },
  methods: {
    upload(file) {
      const formData = new FormData();
      formData.append("file", file.file);
      formData.append("remark", "上传");
      formData.append("parentId", this.$route.query.mid);
      const xhr = new XMLHttpRequest();
      xhr.open("post", "/fileUpload", true);
      xhr.setRequestHeader("Authorization", localStorage.Authorization);
      xhr.onload = (res) => {
        const response = JSON.parse(res.target.response);
        const item = {
          name: file.file.name,
          url: `http://${response.payload}`,
          uid: file.uid,
        };
        this.fileList.push(item);
      };
      xhr.onerror = () => {
        console.log("上传失败");
      };
      xhr.ontimeout = function timeout() {
        console.log("上传超时，请刷新重试");
      };
      xhr.send(formData);
    },
    beforeUpload(file) {
      const isAllow = file.type === "image/jpeg" || file.type === "image/png";
      const isLt5M = file.size / 1024 / 1024 < 5;
      if (!isAllow) {
        this.$q.notify({
          message: "图片只能是 jpg/png 格式!",
          color: "negative",
        });
      }
      if (!isLt5M) {
        this.$q.notify({
          message: "图片大小不能超过 5MB!",
          color: "negative",
        });
      }
      return isAllow && isLt5M;
    },
    handleRemove(file) {
      const index = this.fileList.findIndex((v) => v.uid === file.uid);
      if (index > -1) {
        this.fileList.splice(index, 1);
      }
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
  },
};
</script>