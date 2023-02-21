import { Modal, useMantineTheme } from "@mantine/core";
import PostPart from "../../HomeComponents/PostPart/PostPart";

function ShareModal({ modalOpened, setModalOpened }) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
    <PostPart/>
    </Modal>
  );
}

export default ShareModal;