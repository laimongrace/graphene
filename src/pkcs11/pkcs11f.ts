import * as CK from "./pkcs11t";

export const CK_FUNCTIONS = {
    "C_Initialize": [CK.CK_RV, [CK.CK_VOID_PTR]],
    "C_Finalize": [CK.CK_RV, [CK.CK_VOID_PTR]],
    "C_GetInfo": [CK.CK_RV, [CK.CK_INFO_PTR]],
    // "C_GetFunctionList":[CK.CK_RV,[CK.CK_FUNCTION_LIST_PTR_PTR]],
    "C_GetSlotList": [CK.CK_RV, [CK.CK_BBOOL, CK.CK_SLOT_ID_PTR, CK.CK_ULONG_PTR]],
    "C_GetSlotInfo": [CK.CK_RV, [CK.CK_SLOT_ID, CK.CK_SLOT_INFO_PTR]],
    "C_GetTokenInfo": [CK.CK_RV, [CK.CK_SLOT_ID, CK.CK_TOKEN_INFO_PTR]],
    "C_GetMechanismList": [CK.CK_RV, [CK.CK_SLOT_ID, CK.CK_MECHANISM_TYPE_PTR, CK.CK_ULONG_PTR]],
    "C_GetMechanismInfo": [CK.CK_RV, [CK.CK_SLOT_ID, CK.CK_MECHANISM_TYPE, CK.CK_MECHANISM_INFO_PTR]],
    "C_InitToken": [CK.CK_RV, [CK.CK_SLOT_ID, CK.CK_UTF8CHAR_PTR, CK.CK_ULONG, CK.CK_UTF8CHAR_PTR]],
    "C_InitPIN": [CK.CK_RV, [CK.CK_SESSION_HANDLE, CK.CK_UTF8CHAR_PTR, CK.CK_ULONG]],
    "C_SetPIN": [CK.CK_RV, [CK.CK_SESSION_HANDLE, CK.CK_UTF8CHAR_PTR, CK.CK_ULONG, CK.CK_UTF8CHAR_PTR, CK.CK_ULONG]],
    "C_OpenSession": [CK.CK_RV, [CK.CK_SLOT_ID, CK.CK_FLAGS, CK.CK_VOID_PTR, CK.CK_VOID_PTR, CK.CK_SESSION_HANDLE_PTR]],
    "C_CloseSession": [CK.CK_RV, [CK.CK_SESSION_HANDLE]],
    "C_CloseAllSessions": [CK.CK_RV, [CK.CK_SLOT_ID]],
    "C_GetSessionInfo": [CK.CK_RV, [CK.CK_SESSION_HANDLE, CK.CK_SESSION_INFO_PTR]],
    "C_GetOperationState": [CK.CK_RV, [CK.CK_SESSION_HANDLE, CK.CK_BYTE_PTR, CK.CK_ULONG]],
    "C_SetOperationState": [CK.CK_RV, [CK.CK_SESSION_HANDLE, CK.CK_BYTE_PTR, CK.CK_ULONG, CK.CK_OBJECT_HANDLE, CK.CK_OBJECT_HANDLE]],
    "C_Login": [CK.CK_RV, [CK.CK_SESSION_HANDLE, CK.CK_USER_TYPE, CK.CK_UTF8CHAR_PTR, CK.CK_ULONG]],
    "C_Logout": [CK.CK_RV, [CK.CK_SESSION_HANDLE]],
    /* Object management */
    "C_CreateObject": [CK.CK_RV, [CK.CK_SESSION_HANDLE, CK.CK_ATTRIBUTE_PTR, CK.CK_ULONG, CK.CK_OBJECT_HANDLE_PTR]],
    "C_CopyObject": [CK.CK_RV, [CK.CK_SESSION_HANDLE, CK.CK_OBJECT_HANDLE, CK.CK_ATTRIBUTE_PTR, CK.CK_ULONG, CK.CK_OBJECT_HANDLE_PTR]],
    "C_DestroyObject": [CK.CK_RV, [CK.CK_SESSION_HANDLE, CK.CK_OBJECT_HANDLE]],
    "C_GetObjectSize": [CK.CK_RV, [CK.CK_SESSION_HANDLE, CK.CK_OBJECT_HANDLE, CK.CK_ULONG_PTR]],
    "C_GetAttributeValue": [CK.CK_RV, [CK.CK_SESSION_HANDLE, CK.CK_OBJECT_HANDLE, CK.CK_ATTRIBUTE_PTR, CK.CK_ULONG]],
    "C_SetAttributeValue": [CK.CK_RV, [CK.CK_SESSION_HANDLE, CK.CK_OBJECT_HANDLE, CK.CK_ATTRIBUTE_PTR, CK.CK_ULONG]],
    "C_FindObjectsInit": [CK.CK_RV, [CK.CK_SESSION_HANDLE, CK.CK_ATTRIBUTE_PTR, CK.CK_ULONG]],
    "C_FindObjects": [CK.CK_RV, [CK.CK_SESSION_HANDLE, CK.CK_OBJECT_HANDLE_PTR, CK.CK_ULONG, CK.CK_ULONG_PTR]],
    "C_FindObjectsFinal": [CK.CK_RV, [CK.CK_SESSION_HANDLE]],
    /* Encryption and decryption */
    /* Message encryption functions */
    "C_EncryptInit": [CK.CK_RV, [CK.CK_SESSION_HANDLE, CK.CK_MECHANISM_PTR, CK.CK_OBJECT_HANDLE]],
    "C_Encrypt": [CK.CK_RV, [CK.CK_SESSION_HANDLE, CK.CK_BYTE_PTR, CK.CK_ULONG, CK.CK_BYTE_PTR, CK.CK_ULONG_PTR]],
    "C_EncryptUpdate": [CK.CK_RV, [CK.CK_SESSION_HANDLE, CK.CK_BYTE_PTR, CK.CK_ULONG, CK.CK_BYTE_PTR, CK.CK_ULONG_PTR]],
    "C_EncryptFinal": [CK.CK_RV, [CK.CK_SESSION_HANDLE, CK.CK_BYTE_PTR, CK.CK_ULONG_PTR]],
    /* Message decryption functions */
    "C_DecryptInit": [CK.CK_RV, [CK.CK_SESSION_HANDLE, CK.CK_MECHANISM_PTR, CK.CK_OBJECT_HANDLE]],
    "C_Decrypt": [CK.CK_RV, [CK.CK_SESSION_HANDLE, CK.CK_BYTE_PTR, CK.CK_ULONG, CK.CK_BYTE_PTR, CK.CK_ULONG_PTR]],
    "C_DecryptUpdate": [CK.CK_RV, [CK.CK_SESSION_HANDLE, CK.CK_BYTE_PTR, CK.CK_ULONG, CK.CK_BYTE_PTR, CK.CK_ULONG_PTR]],
    "C_DecryptFinal": [CK.CK_RV, [CK.CK_SESSION_HANDLE, CK.CK_BYTE_PTR, CK.CK_ULONG_PTR]],
    /* Message digesting functions */
    "C_DigestInit": [CK.CK_RV, [CK.CK_SESSION_HANDLE, CK.CK_MECHANISM_PTR]],
    "C_Digest": [CK.CK_RV, [CK.CK_SESSION_HANDLE, CK.CK_BYTE_PTR, CK.CK_ULONG, CK.CK_BYTE_PTR, CK.CK_ULONG_PTR]],
    "C_DigestUpdate": [CK.CK_RV, [CK.CK_SESSION_HANDLE, CK.CK_BYTE_PTR, CK.CK_ULONG]],
    "C_DigestKey": [CK.CK_RV, [CK.CK_SESSION_HANDLE, CK.CK_OBJECT_HANDLE]],
    "C_DigestFinal": [CK.CK_RV, [CK.CK_SESSION_HANDLE, CK.CK_BYTE_PTR, CK.CK_ULONG_PTR]],
    /* Message signing functions */
    "C_SignInit": [CK.CK_RV, [CK.CK_SESSION_HANDLE, CK.CK_MECHANISM_PTR, CK.CK_OBJECT_HANDLE]],
    "C_Sign": [CK.CK_RV, [CK.CK_SESSION_HANDLE, CK.CK_BYTE_PTR, CK.CK_ULONG, CK.CK_BYTE_PTR, CK.CK_ULONG_PTR]],
    "C_SignUpdate": [CK.CK_RV, [CK.CK_SESSION_HANDLE, CK.CK_BYTE_PTR, CK.CK_ULONG]],
    "C_SignFinal": [CK.CK_RV, [CK.CK_SESSION_HANDLE, CK.CK_BYTE_PTR, CK.CK_ULONG_PTR]],
    "C_SignRecoverInit": [CK.CK_RV, [CK.CK_SESSION_HANDLE, CK.CK_MECHANISM_PTR, CK.CK_OBJECT_HANDLE]],
    "C_SignRecover": [CK.CK_RV, [CK.CK_SESSION_HANDLE, CK.CK_BYTE_PTR, CK.CK_ULONG, CK.CK_BYTE_PTR, CK.CK_ULONG_PTR]],
    /* Message verifying functions */
    "C_VerifyInit": [CK.CK_RV, [CK.CK_SESSION_HANDLE, CK.CK_MECHANISM_PTR, CK.CK_OBJECT_HANDLE]],
    "C_Verify": [CK.CK_RV, [CK.CK_SESSION_HANDLE, CK.CK_BYTE_PTR, CK.CK_ULONG, CK.CK_BYTE_PTR, CK.CK_ULONG]],
    "C_VerifyUpdate": [CK.CK_RV, [CK.CK_SESSION_HANDLE, CK.CK_BYTE_PTR, CK.CK_ULONG]],
    "C_VerifyFinal": [CK.CK_RV, [CK.CK_SESSION_HANDLE, CK.CK_BYTE_PTR, CK.CK_ULONG]],
    "C_VerifyRecoverInit": [CK.CK_RV, [CK.CK_SESSION_HANDLE, CK.CK_MECHANISM_PTR, CK.CK_OBJECT_HANDLE]],
    "C_VerifyRecover": [CK.CK_RV, [CK.CK_SESSION_HANDLE, CK.CK_BYTE_PTR, CK.CK_ULONG, CK.CK_BYTE_PTR, CK.CK_ULONG_PTR]],
    /* Dual-function cryptographic operations */
    "C_DigestEncryptUpdate": [CK.CK_RV, [CK.CK_SESSION_HANDLE, CK.CK_BYTE_PTR, CK.CK_ULONG, CK.CK_BYTE_PTR, CK.CK_ULONG_PTR]],
    "C_DecryptDigestUpdate": [CK.CK_RV, [CK.CK_SESSION_HANDLE, CK.CK_BYTE_PTR, CK.CK_ULONG, CK.CK_BYTE_PTR, CK.CK_ULONG_PTR]],
    "C_SignEncryptUpdate": [CK.CK_RV, [CK.CK_SESSION_HANDLE, CK.CK_BYTE_PTR, CK.CK_ULONG, CK.CK_BYTE_PTR, CK.CK_ULONG_PTR]],
    "C_DecryptVerifyUpdate": [CK.CK_RV, [CK.CK_SESSION_HANDLE, CK.CK_BYTE_PTR, CK.CK_ULONG, CK.CK_BYTE_PTR, CK.CK_ULONG_PTR]],
    /* Key management */
    "C_GenerateKey": [CK.CK_RV, [CK.CK_SESSION_HANDLE, CK.CK_MECHANISM_PTR, CK.CK_ATTRIBUTE_PTR, CK.CK_ULONG, CK.CK_OBJECT_HANDLE_PTR]],
    "C_GenerateKeyPair": [CK.CK_RV, [CK.CK_SESSION_HANDLE, CK.CK_MECHANISM_PTR, CK.CK_ATTRIBUTE_PTR, CK.CK_ULONG, CK.CK_ATTRIBUTE_PTR, CK.CK_ULONG, CK.CK_OBJECT_HANDLE_PTR, CK.CK_OBJECT_HANDLE_PTR]],
    "C_WrapKey": [CK.CK_RV, [CK.CK_SESSION_HANDLE, CK.CK_MECHANISM_PTR, CK.CK_OBJECT_HANDLE, CK.CK_OBJECT_HANDLE, CK.CK_BYTE_PTR, CK.CK_ULONG_PTR]],
    "C_UnwrapKey": [CK.CK_RV, [CK.CK_SESSION_HANDLE, CK.CK_MECHANISM_PTR, CK.CK_OBJECT_HANDLE, CK.CK_BYTE_PTR, CK.CK_ULONG, CK.CK_ATTRIBUTE_PTR, CK.CK_ULONG, CK.CK_OBJECT_HANDLE_PTR]],
    "C_DeriveKey": [CK.CK_RV, [CK.CK_SESSION_HANDLE, CK.CK_MECHANISM_PTR, CK.CK_OBJECT_HANDLE, CK.CK_ATTRIBUTE_PTR, CK.CK_ULONG, CK.CK_OBJECT_HANDLE_PTR]],
    /* Random number generation */
    "C_SeedRandom": [CK.CK_RV, [CK.CK_SESSION_HANDLE, CK.CK_BYTE_PTR, CK.CK_ULONG]],
    "C_GenerateRandom": [CK.CK_RV, [CK.CK_SESSION_HANDLE, CK.CK_BYTE_PTR, CK.CK_ULONG]],
    /* Parallel function management */
    "C_GetFunctionStatus": [CK.CK_RV, [CK.CK_SESSION_HANDLE]],
    "C_CancelFunction": [CK.CK_RV, [CK.CK_SESSION_HANDLE]],
    /* Functions added in for Cryptoki Version 2.01 or later */
    "C_WaitForSlotEvent": [CK.CK_RV, [CK.CK_FLAGS, CK.CK_SLOT_ID_PTR, CK.CK_VOID_PTR]]
};