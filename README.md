# serverless-sample

## 1. 프로젝트 구조

```bash
project/
├── serverless.yml         # Serverless Framework 설정 파일
├── src/
│   ├── functions/
│   │   ├── hello.ts       # hello 함수 코드
│   │   ├── sum.ts         # sum 함수 코드
│   └── lib/
│       └── math.ts        # sum 함수에 사용될 라이브러리 코드
├── tsconfig.json          # TypeScript 설정 파일

```

## 2. 배포

### 패키지 설치

```bash
npm install
```

### AWS CLI 설정: AWS CLI 설정이 안되어 있을 경우 진행

```bash
aws configure --profile dev

AWS Access Key ID [None]: {your-access-key}
AWS Secret Access Key [None]: {your-secret-key}
Default region name [None]: ap-northeast-2 // 서울 리전
Default output format [None]: json
```

### 로컬 테스트

```bash
serverless offline -s local start
```


### 배포

```bash
# --aws-profile: 배포 시 특정 AWS 프로파일 사용
serverless deploy --stage dev --aws-profile dev --verbose
```